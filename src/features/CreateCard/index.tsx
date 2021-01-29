import { gql, useMutation } from '@apollo/client';
import { Storage } from 'aws-amplify';
import { FunctionComponent, useState } from 'react';
import { CreateCardMutation, CreateCardMutationVariables } from '../../API';
import { createCard } from '../../graphql/mutations';

const CreateCard: FunctionComponent = () => {
  const [title, setTitle] = useState<undefined | string>();
  const [desc, setDesc] = useState<undefined | string>();
  const [pic, setPic] = useState<undefined | File>();

  const [titleToggle, setTitleToggle] = useState(false);
  const [descToggle, setDescToggle] = useState(false);
  const [picToggle, setPicToggle] = useState(false);

  const [addCard] = useMutation<CreateCardMutation, CreateCardMutationVariables>(
    gql`
      ${createCard}
    `
  );

  const saveCard = async () => {
    if (title && desc && pic) {
      const fileName = pic.name;
      await Storage.put(fileName, pic, { level: 'protected' });

      await addCard({
        variables: {
          input: {
            name: title,
            description: desc,
            coverImage: fileName,
            cardParentId: 'null',
          },
        },
      });
    }
  };

  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
      {titleToggle ? (
        <>
          <input
            type="text"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="button" onClick={() => setTitleToggle(false)}>
            ok
          </button>
        </>
      ) : (
        <div onClick={() => setTitleToggle(true)}>{title || 'title'}</div>
      )}
      {descToggle ? (
        <>
          <input
            type="text"
            value={desc}
            placeholder="Enter Desc"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="button" onClick={() => setDescToggle(false)}>
            ok
          </button>
        </>
      ) : (
        <div onClick={() => setDescToggle(true)}>{desc || 'desc'}</div>
      )}
      {picToggle ? (
        <>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              if (e.target.files) {
                setPic(e.target.files[0]);
              }
            }}
          />
          <button type="button" onClick={() => setPicToggle(false)}>
            ok
          </button>
        </>
      ) : (
        <div onClick={() => setPicToggle(true)}>photo</div>
      )}

      <button type="button" onClick={saveCard}>
        save
      </button>
    </div>
  );
};

export default CreateCard;
