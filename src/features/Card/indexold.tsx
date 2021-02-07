import { gql, useMutation, useQuery } from '@apollo/client';
import { FunctionComponent, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// @ts-ignore
import Masonry from 'react-responsive-masonry';
import { API, Storage } from 'aws-amplify';

import { getCard } from '../../graphql/queries';
import {
  GetCardQuery,
  CreateNoteMutation,
  CreateNoteMutationVariables,
  CreateCardMutation,
  CreateCardMutationVariables,
  CreateImageMutation,
  CreateImageMutationVariables,
  CreateLinkMutation,
  CreateLinkMutationVariables,
} from '../../API';
import { createCard, createImage, createLink, createNote } from '../../graphql/mutations';
import ImageDiv from '../../common/ImageBlok';
import CardBlok from '../../common/CardBlok';
import LinkBlok from '../../common/LinkBlok';
import NoteBlok from '../../common/NoteBlok';
import CatBlok from './CatBlok';

const Card: FunctionComponent<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const cardId = match.params.id;
  const [newNote, setNewNote] = useState<string | undefined>();
  const [newNoteTitle, setNewNoteTitle] = useState<string | undefined>();
  const [newCardTitle, setNewCardTitle] = useState<string | undefined>();
  const [newCardDesc, setNewCardDesc] = useState<string | undefined>();
  const [newCardImage, setNewCardImage] = useState<undefined | File>();
  const [newImage, setNewImage] = useState<undefined | File>();
  const [newLink, setNewLink] = useState<string | undefined>();
  const [nCardTogle, setNCardToggle] = useState<boolean>(false);
  // const [nNoteTogle, setNNoteToggle] = useState<boolean>(false);
  const [nImageTogle, setNImageToggle] = useState<boolean>(false);
  const [nLinkTogle, setNLinkToggle] = useState<boolean>(false);

  const { data, refetch } = useQuery<GetCardQuery>(
    gql`
      ${getCard}
    `,
    { fetchPolicy: 'cache-and-network', nextFetchPolicy: 'cache-first', variables: { id: cardId } }
  );

  const [addNote] = useMutation<CreateNoteMutation, CreateNoteMutationVariables>(
    gql`
      ${createNote}
    `
  );

  const [addCard] = useMutation<CreateCardMutation, CreateCardMutationVariables>(
    gql`
      ${createCard}
    `
  );

  const [addPhoto] = useMutation<CreateImageMutation, CreateImageMutationVariables>(
    gql`
      ${createImage}
    `
  );

  const [addLink] = useMutation<CreateLinkMutation, CreateLinkMutationVariables>(
    gql`
      ${createLink}
    `
  );

  const card = data && data.getCard;

  const saveNote = async () => {
    if (newNote && card && newNoteTitle) {
      await addNote({
        variables: {
          input: {
            cardID: card.id,
            text: newNote,
            title: newNoteTitle,
          },
        },
      });

      refetch();
    }
  };

  const saveCard = async () => {
    if (newCardTitle && newCardDesc && newCardImage) {
      const fileName = newCardImage.name;
      await Storage.put(fileName, newCardImage, { level: 'protected' });
      await addCard({
        variables: {
          input: {
            description: newCardDesc,
            name: newCardTitle,
            cardParentId: cardId,
            coverImage: fileName,
          },
        },
      });

      refetch();
    }
  };

  const saveNewImage = async () => {
    if (newImage && card) {
      const fileName = newImage.name;
      await Storage.put(fileName, newImage, { level: 'protected' });
      await addPhoto({
        variables: {
          input: {
            image: fileName,
            cardID: card.id,
          },
        },
      });

      refetch();
    }
  };

  const saveLink = async () => {
    if (newLink && card) {
      const res = await API.get('api15cd2125', '/compute', {
        headers: {},
        queryStringParameters: {
          url: encodeURIComponent(newLink),
        },
      });

      await addLink({
        variables: {
          input: {
            cardID: card.id,
            link: newLink,
            img: res.ogImage.url,
            title: res.ogTitle,
          },
        },
      });

      refetch();
    }
  };

  if (!card) {
    return <div>No Card Found</div>;
  }

  const notes =
    card.Notes &&
    card.Notes.items &&
    card.Notes.items.map((note) => {
      if (note) {
        return <NoteBlok title={note.title} text={note.text} id={note.id} />;
      }

      return undefined;
    });

  const cards =
    card.child &&
    card.child.items &&
    card.child.items.map((childCard) => {
      if (childCard) {
        return (
          <CardBlok
            title={childCard.name}
            img={childCard.coverImage}
            id={childCard.id}
            key={childCard.id}
          />
        );
      }

      return null;
    });

  const images =
    card.Images &&
    card.Images.items &&
    card.Images.items.map((img) => {
      if (img) {
        return <ImageDiv img={img.image} key={img.id} />;
      }

      return undefined;
    });

  const links =
    card.Links &&
    card.Links.items &&
    card.Links.items.map((link) => {
      if (link) {
        return <LinkBlok name={link.title} coverImage={link.img} link={link.link} key={link.id} />;
      }

      return undefined;
    });

  return (
    <>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
        <div className="col-span-4 col-start-2 ">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-8xl mb-8 font-medium">{card.name}</div>
              <div className="text-xl  text-justify">{card.description}</div>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-start-2">Left</div>

        <div className="col-span-4">
          <Masonry columnsCount={2} gutter={16}>
            <div>
              {card.coverImage && <ImageDiv img={card.coverImage} />}
              <div className="mt-4 h-1 bg-gray-800" />
            </div>

            <div className="col-span-6  row-start-4 grid grid-cols-2 gap-4">
              <div className="flex justify-center flex-col items-center text-4xl border border-gray-800 font-medium cursor-pointer">
                {nCardTogle ? (
                  <div className="w-full p-4 flex flex-col items-center">
                    <input
                      className="w-full mb-4 text-xl p-1 border-gray-800 border"
                      type="text"
                      value={newCardTitle}
                      onChange={(e) => setNewCardTitle(e.target.value)}
                      placeholder="title"
                    />
                    <input
                      type="text"
                      className="w-full mb-4 text-xl p-1 border-gray-800 border"
                      value={newCardDesc}
                      onChange={(e) => setNewCardDesc(e.target.value)}
                      placeholder="Desc"
                    />
                    <input
                      type="file"
                      className="w-full text-xl mb-4"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        if (e.target.files) {
                          setNewCardImage(e.target.files[0]);
                        }
                      }}
                    />
                    <button
                      className="border px-4 py-2 text-xl border-gray-800"
                      type="button"
                      onClick={() => saveCard()}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center"
                    onClick={() => setNCardToggle(!nCardTogle)}
                  >
                    <div>Cards</div>
                    <div className="h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {cards}
              <div className=" h-1 bg-gray-800 col-span-2" />
            </div>

            <Masonry columnsCount={2} gutter={16}>
              <div className="flex justify-center flex-col  h-48 items-center text-4xl border border-gray-800 font-medium cursor-pointer">
                {nImageTogle ? (
                  <div className="w-full p-4 flex flex-col items-center">
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      className="w-full text-xl mb-4"
                      onChange={(e) => {
                        if (e.target.files) {
                          setNewImage(e.target.files[0]);
                        }
                      }}
                    />
                    <button
                      className="border px-4 py-2 text-xl border-gray-800"
                      type="button"
                      onClick={() => saveNewImage()}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center"
                    onClick={() => setNImageToggle(!nImageTogle)}
                  >
                    <div>Images</div>
                    <div className="h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {images}
            </Masonry>

            <Masonry columnsCount={2} gutter={16}>
              <div className="flex justify-center flex-col h-48 items-center text-4xl border border-gray-800 font-medium cursor-pointer">
                <CatBlok name="note">
                  <div className="w-full p-4 flex flex-col items-center">
                    <input
                      className="w-full mb-4 text-xl p-1 border-gray-800 border"
                      type="text"
                      placeholder="Title"
                      value={newNoteTitle}
                      onChange={(e) => setNewNoteTitle(e.target.value)}
                    />
                    <input
                      className="w-full mb-4 text-xl p-1 border-gray-800 border"
                      type="text"
                      value={newNote}
                      placeholder="Text"
                      onChange={(e) => setNewNote(e.target.value)}
                    />
                    <button
                      className="border px-4 py-2 text-xl border-gray-800"
                      type="button"
                      onClick={() => saveNote()}
                    >
                      Save
                    </button>
                  </div>
                </CatBlok>
              </div>
              {notes}
            </Masonry>
          </Masonry>
        </div>

        <div className="col-span-1 ">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-center flex-col  h-48 items-center text-4xl border border-gray-800 font-medium cursor-pointer">
              {nLinkTogle ? (
                <div className="w-full p-4 flex flex-col items-center">
                  <input
                    className="w-full mb-4 text-xl p-1 border-gray-800 border"
                    type="text"
                    value={newLink}
                    placeholder="Link"
                    onChange={(e) => setNewLink(e.target.value)}
                  />
                  <button
                    className="border px-4 py-2 text-xl border-gray-800"
                    type="button"
                    onClick={() => saveLink()}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div
                  className="flex flex-col items-center"
                  onClick={() => setNLinkToggle(!nLinkTogle)}
                >
                  <div>Links</div>
                  <div className="h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            {links}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
