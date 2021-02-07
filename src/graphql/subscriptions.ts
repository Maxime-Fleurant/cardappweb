/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      TagCards {
        items {
          id
          tagID
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
      TagLinks {
        items {
          id
          tagID
          linkID
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
      TagNotes {
        items {
          id
          tagID
          noteID
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
      TagImages {
        items {
          id
          tagID
          imageID
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owner: String) {
    onUpdateTag(owner: $owner) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      TagCards {
        items {
          id
          tagID
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
      TagLinks {
        items {
          id
          tagID
          linkID
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
      TagNotes {
        items {
          id
          tagID
          noteID
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
      TagImages {
        items {
          id
          tagID
          imageID
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owner: String) {
    onDeleteTag(owner: $owner) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      TagCards {
        items {
          id
          tagID
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
      TagLinks {
        items {
          id
          tagID
          linkID
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
      TagNotes {
        items {
          id
          tagID
          noteID
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
      TagImages {
        items {
          id
          tagID
          imageID
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
      tags {
        items {
          id
          tagID
          linkID
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
      tags {
        items {
          id
          tagID
          linkID
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
      tags {
        items {
          id
          tagID
          linkID
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
      tags {
        items {
          id
          tagID
          imageID
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
      tags {
        items {
          id
          tagID
          imageID
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
      tags {
        items {
          id
          tagID
          imageID
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
      tags {
        items {
          id
          tagID
          noteID
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
      tags {
        items {
          id
          tagID
          noteID
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
      tags {
        items {
          id
          tagID
          noteID
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
        tags {
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
      tags {
        items {
          id
          tagID
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
        tags {
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
      tags {
        items {
          id
          tagID
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
        tags {
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
      tags {
        items {
          id
          tagID
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
    }
  }
`;
export const onCreateTagCard = /* GraphQL */ `
  subscription OnCreateTagCard {
    onCreateTagCard {
      id
      tagID
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      card {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateTagCard = /* GraphQL */ `
  subscription OnUpdateTagCard {
    onUpdateTagCard {
      id
      tagID
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      card {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteTagCard = /* GraphQL */ `
  subscription OnDeleteTagCard {
    onDeleteTagCard {
      id
      tagID
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      card {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onCreateTagLink = /* GraphQL */ `
  subscription OnCreateTagLink {
    onCreateTagLink {
      id
      tagID
      linkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      link {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateTagLink = /* GraphQL */ `
  subscription OnUpdateTagLink {
    onUpdateTagLink {
      id
      tagID
      linkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      link {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteTagLink = /* GraphQL */ `
  subscription OnDeleteTagLink {
    onDeleteTagLink {
      id
      tagID
      linkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      link {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onCreateTagNote = /* GraphQL */ `
  subscription OnCreateTagNote {
    onCreateTagNote {
      id
      tagID
      noteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      note {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateTagNote = /* GraphQL */ `
  subscription OnUpdateTagNote {
    onUpdateTagNote {
      id
      tagID
      noteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      note {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteTagNote = /* GraphQL */ `
  subscription OnDeleteTagNote {
    onDeleteTagNote {
      id
      tagID
      noteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      note {
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
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onCreateTagImage = /* GraphQL */ `
  subscription OnCreateTagImage {
    onCreateTagImage {
      id
      tagID
      imageID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      image {
        id
        image
        cardID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateTagImage = /* GraphQL */ `
  subscription OnUpdateTagImage {
    onUpdateTagImage {
      id
      tagID
      imageID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      image {
        id
        image
        cardID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteTagImage = /* GraphQL */ `
  subscription OnDeleteTagImage {
    onDeleteTagImage {
      id
      tagID
      imageID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        TagCards {
          nextToken
          startedAt
        }
        TagLinks {
          nextToken
          startedAt
        }
        TagNotes {
          nextToken
          startedAt
        }
        TagImages {
          nextToken
          startedAt
        }
      }
      image {
        id
        image
        cardID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        tags {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
