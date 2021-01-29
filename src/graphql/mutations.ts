/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLink = /* GraphQL */ `
  mutation CreateLink(
    $input: CreateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    createLink(input: $input, condition: $condition) {
      id
      link
      cardID
      img
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLink = /* GraphQL */ `
  mutation UpdateLink(
    $input: UpdateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    updateLink(input: $input, condition: $condition) {
      id
      link
      cardID
      img
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLink = /* GraphQL */ `
  mutation DeleteLink(
    $input: DeleteLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    deleteLink(input: $input, condition: $condition) {
      id
      link
      cardID
      img
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      image
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      image
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      image
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      text
      cardID
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      text
      cardID
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      text
      cardID
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
      id
      name
      description
      coverImage
      cardParentId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Links {
        items {
          id
          link
          cardID
          img
          title
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      Images {
        items {
          id
          image
          cardID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      Notes {
        items {
          id
          text
          cardID
          title
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
      cardParent {
        id
        name
        description
        coverImage
        cardParentId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Links {
          nextToken
          startedAt
        }
        Images {
          nextToken
          startedAt
        }
        Notes {
          nextToken
          startedAt
        }
        owner
        cardParent {
          id
          name
          description
          coverImage
          cardParentId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        child {
          nextToken
          startedAt
        }
      }
      child {
        items {
          id
          name
          description
          coverImage
          cardParentId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
      id
      name
      description
      coverImage
      cardParentId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Links {
        items {
          id
          link
          cardID
          img
          title
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      Images {
        items {
          id
          image
          cardID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      Notes {
        items {
          id
          text
          cardID
          title
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
      cardParent {
        id
        name
        description
        coverImage
        cardParentId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Links {
          nextToken
          startedAt
        }
        Images {
          nextToken
          startedAt
        }
        Notes {
          nextToken
          startedAt
        }
        owner
        cardParent {
          id
          name
          description
          coverImage
          cardParentId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        child {
          nextToken
          startedAt
        }
      }
      child {
        items {
          id
          name
          description
          coverImage
          cardParentId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
      id
      name
      description
      coverImage
      cardParentId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Links {
        items {
          id
          link
          cardID
          img
          title
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      Images {
        items {
          id
          image
          cardID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      Notes {
        items {
          id
          text
          cardID
          title
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
      cardParent {
        id
        name
        description
        coverImage
        cardParentId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Links {
          nextToken
          startedAt
        }
        Images {
          nextToken
          startedAt
        }
        Notes {
          nextToken
          startedAt
        }
        owner
        cardParent {
          id
          name
          description
          coverImage
          cardParentId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        child {
          nextToken
          startedAt
        }
      }
      child {
        items {
          id
          name
          description
          coverImage
          cardParentId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
