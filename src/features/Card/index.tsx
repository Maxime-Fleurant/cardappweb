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
import ImageDiv from '../../common/ImageDiv';
import SingleCard from '../CardList/SingleCard';
import SingleLink from '../../common/SingleLink';

const Card: FunctionComponent<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const cardId = match.params.id;
  const [newNote, setNewNote] = useState<string | undefined>();
  const [newNoteTitle, setNewNoteTitle] = useState<string | undefined>();
  const [newCardTitle, setNewCardTitle] = useState<string | undefined>();
  const [newCardDesc, setNewCardDesc] = useState<string | undefined>();
  const [newCardImage, setNewCardImage] = useState<undefined | File>();
  const [newImage, setNewImage] = useState<undefined | File>();
  const [newLink, setNewLink] = useState<string | undefined>();

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
        return (
          <div key={note.id} className="p-4  border border-gray-800">
            <div className=" text-2xl font-medium">{note.title}</div>
            <div className="text-justify">{note.text}</div>
          </div>
        );
      }

      return undefined;
    });

  const cards =
    card.child &&
    card.child.items &&
    card.child.items.map((childCard) => {
      if (childCard) {
        return (
          <SingleCard
            name={childCard?.name}
            coverImage={childCard?.coverImage}
            id={childCard?.id}
            key={childCard && childCard.id}
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
        return <ImageDiv img={img.image} key={img.id} className="border border-gray-800" />;
      }

      return undefined;
    });

  const links =
    card.Links &&
    card.Links.items &&
    card.Links.items.map((link) => {
      if (link) {
        return (
          <div className="mb-4" key={link && link.id}>
            <SingleLink name={link.title || ''} coverImage={link.img} link={link.link || ''} />
          </div>
        );
      }

      return undefined;
    });

  return (
    <>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
        <div className="col-span-1">left side</div>
        <div className="col-span-4 ">
          <div className="grid grid-cols-2">
            <div>
              <div className="text-8xl mb-8 font-medium">{card.name}</div>
              <div className="text-xl mb-8 text-justify">{card.description}</div>
            </div>
          </div>

          <Masonry columnsCount={2} gutter={16}>
            <div>
              {card.coverImage && <ImageDiv img={card.coverImage} />}
              <div className="mt-4 h-1 bg-gray-800" />
            </div>

            <div className="col-span-6 row-start-4 grid grid-cols-2 gap-4">
              <div className="flex justify-center items-center text-4xl border border-gray-800 font-medium">
                Cards
              </div>
              {cards}
              <div className=" h-1 bg-gray-800 col-span-2" />
            </div>

            <Masonry columnsCount={2} gutter={16}>
              <div className="flex h-48 justify-center items-center text-4xl border border-gray-800 font-medium">
                Images
              </div>
              {images}
            </Masonry>

            <Masonry columnsCount={2} gutter={16}>
              <div className="flex h-48 justify-center items-center text-4xl border border-gray-800 font-medium">
                Notes
              </div>
              {notes}
            </Masonry>
          </Masonry>
        </div>
        <div className="col-span-1 ">{links}</div>
      </div>

      <div>
        <div>
          <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
          <input
            type="text"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
          />
          <button type="button" onClick={() => saveNote()}>
            Save note
          </button>
        </div>

        <div>
          <input
            type="text"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            placeholder="title"
          />
          <input
            type="text"
            value={newCardDesc}
            onChange={(e) => setNewCardDesc(e.target.value)}
            placeholder="Desc"
          />
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              if (e.target.files) {
                setNewCardImage(e.target.files[0]);
              }
            }}
          />
          <button type="button" onClick={() => saveCard()}>
            Save Card
          </button>
        </div>

        <div>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              if (e.target.files) {
                setNewImage(e.target.files[0]);
              }
            }}
          />
          <button type="button" onClick={() => saveNewImage()}>
            Save Image
          </button>
        </div>

        <div>
          <input
            type="text"
            value={newLink}
            placeholder="link"
            onChange={(e) => setNewLink(e.target.value)}
          />
          <button type="button" onClick={() => saveLink()}>
            Save Link
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
