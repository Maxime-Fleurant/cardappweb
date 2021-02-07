/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createTagCard = /* GraphQL */ `
  mutation CreateTagCard(
    $input: CreateTagCardInput!
    $condition: ModelTagCardConditionInput
  ) {
    createTagCard(input: $input, condition: $condition) {
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
export const updateTagCard = /* GraphQL */ `
  mutation UpdateTagCard(
    $input: UpdateTagCardInput!
    $condition: ModelTagCardConditionInput
  ) {
    updateTagCard(input: $input, condition: $condition) {
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
export const deleteTagCard = /* GraphQL */ `
  mutation DeleteTagCard(
    $input: DeleteTagCardInput!
    $condition: ModelTagCardConditionInput
  ) {
    deleteTagCard(input: $input, condition: $condition) {
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
export const createTagLink = /* GraphQL */ `
  mutation CreateTagLink(
    $input: CreateTagLinkInput!
    $condition: ModelTagLinkConditionInput
  ) {
    createTagLink(input: $input, condition: $condition) {
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
export const updateTagLink = /* GraphQL */ `
  mutation UpdateTagLink(
    $input: UpdateTagLinkInput!
    $condition: ModelTagLinkConditionInput
  ) {
    updateTagLink(input: $input, condition: $condition) {
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
export const deleteTagLink = /* GraphQL */ `
  mutation DeleteTagLink(
    $input: DeleteTagLinkInput!
    $condition: ModelTagLinkConditionInput
  ) {
    deleteTagLink(input: $input, condition: $condition) {
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
export const createTagNote = /* GraphQL */ `
  mutation CreateTagNote(
    $input: CreateTagNoteInput!
    $condition: ModelTagNoteConditionInput
  ) {
    createTagNote(input: $input, condition: $condition) {
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
export const updateTagNote = /* GraphQL */ `
  mutation UpdateTagNote(
    $input: UpdateTagNoteInput!
    $condition: ModelTagNoteConditionInput
  ) {
    updateTagNote(input: $input, condition: $condition) {
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
export const deleteTagNote = /* GraphQL */ `
  mutation DeleteTagNote(
    $input: DeleteTagNoteInput!
    $condition: ModelTagNoteConditionInput
  ) {
    deleteTagNote(input: $input, condition: $condition) {
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
export const createTagImage = /* GraphQL */ `
  mutation CreateTagImage(
    $input: CreateTagImageInput!
    $condition: ModelTagImageConditionInput
  ) {
    createTagImage(input: $input, condition: $condition) {
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
export const updateTagImage = /* GraphQL */ `
  mutation UpdateTagImage(
    $input: UpdateTagImageInput!
    $condition: ModelTagImageConditionInput
  ) {
    updateTagImage(input: $input, condition: $condition) {
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
export const deleteTagImage = /* GraphQL */ `
  mutation DeleteTagImage(
    $input: DeleteTagImageInput!
    $condition: ModelTagImageConditionInput
  ) {
    deleteTagImage(input: $input, condition: $condition) {
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
