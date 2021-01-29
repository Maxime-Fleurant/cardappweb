/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLink = /* GraphQL */ `
  subscription OnCreateLink($owner: String) {
    onCreateLink(owner: $owner) {
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
export const onUpdateLink = /* GraphQL */ `
  subscription OnUpdateLink($owner: String) {
    onUpdateLink(owner: $owner) {
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
export const onDeleteLink = /* GraphQL */ `
  subscription OnDeleteLink($owner: String) {
    onDeleteLink(owner: $owner) {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($owner: String) {
    onCreateImage(owner: $owner) {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($owner: String) {
    onUpdateImage(owner: $owner) {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($owner: String) {
    onDeleteImage(owner: $owner) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String) {
    onCreateNote(owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String) {
    onUpdateNote(owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String) {
    onDeleteNote(owner: $owner) {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard($owner: String) {
    onCreateCard(owner: $owner) {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard($owner: String) {
    onUpdateCard(owner: $owner) {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard($owner: String) {
    onDeleteCard(owner: $owner) {
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
