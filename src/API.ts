/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLinkInput = {
  id?: string | null,
  link?: string | null,
  cardID: string,
  img?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type ModelLinkConditionInput = {
  link?: ModelStringInput | null,
  cardID?: ModelIDInput | null,
  img?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelLinkConditionInput | null > | null,
  or?: Array< ModelLinkConditionInput | null > | null,
  not?: ModelLinkConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLinkInput = {
  id: string,
  link?: string | null,
  cardID?: string | null,
  img?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type DeleteLinkInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateImageInput = {
  id?: string | null,
  image?: string | null,
  cardID: string,
  _version?: number | null,
};

export type ModelImageConditionInput = {
  image?: ModelStringInput | null,
  cardID?: ModelIDInput | null,
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
};

export type UpdateImageInput = {
  id: string,
  image?: string | null,
  cardID?: string | null,
  _version?: number | null,
};

export type DeleteImageInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateNoteInput = {
  id?: string | null,
  text: string,
  cardID: string,
  title?: string | null,
  _version?: number | null,
};

export type ModelNoteConditionInput = {
  text?: ModelStringInput | null,
  cardID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type UpdateNoteInput = {
  id: string,
  text?: string | null,
  cardID?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type DeleteNoteInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateCardInput = {
  id?: string | null,
  name: string,
  description: string,
  coverImage?: string | null,
  cardParentId?: string | null,
  _version?: number | null,
  cardCardParentId?: string | null,
};

export type ModelCardConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  cardParentId?: ModelIDInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
};

export type UpdateCardInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  coverImage?: string | null,
  cardParentId?: string | null,
  _version?: number | null,
  cardCardParentId?: string | null,
};

export type DeleteCardInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelLinkFilterInput = {
  id?: ModelIDInput | null,
  link?: ModelStringInput | null,
  cardID?: ModelIDInput | null,
  img?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelLinkFilterInput | null > | null,
  or?: Array< ModelLinkFilterInput | null > | null,
  not?: ModelLinkFilterInput | null,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  cardID?: ModelIDInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  cardID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  cardParentId?: ModelIDInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type CreateLinkMutationVariables = {
  input: CreateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type CreateLinkMutation = {
  createLink:  {
    __typename: "Link",
    id: string,
    link: string | null,
    cardID: string,
    img: string | null,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateLinkMutationVariables = {
  input: UpdateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type UpdateLinkMutation = {
  updateLink:  {
    __typename: "Link",
    id: string,
    link: string | null,
    cardID: string,
    img: string | null,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteLinkMutationVariables = {
  input: DeleteLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type DeleteLinkMutation = {
  deleteLink:  {
    __typename: "Link",
    id: string,
    link: string | null,
    cardID: string,
    img: string | null,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateImageMutationVariables = {
  input: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage:  {
    __typename: "Image",
    id: string,
    image: string | null,
    cardID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage:  {
    __typename: "Image",
    id: string,
    image: string | null,
    cardID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage:  {
    __typename: "Image",
    id: string,
    image: string | null,
    cardID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote:  {
    __typename: "Note",
    id: string,
    text: string,
    cardID: string,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote:  {
    __typename: "Note",
    id: string,
    text: string,
    cardID: string,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote:  {
    __typename: "Note",
    id: string,
    text: string,
    cardID: string,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard:  {
    __typename: "Card",
    id: string,
    name: string,
    description: string,
    coverImage: string | null,
    cardParentId: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Links:  {
      __typename: "ModelLinkConnection",
      items:  Array< {
        __typename: "Link",
        id: string,
        link: string | null,
        cardID: string,
        img: string | null,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Images:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        image: string | null,
        cardID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        cardID: string,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
    cardParent:  {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    child:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard:  {
    __typename: "Card",
    id: string,
    name: string,
    description: string,
    coverImage: string | null,
    cardParentId: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Links:  {
      __typename: "ModelLinkConnection",
      items:  Array< {
        __typename: "Link",
        id: string,
        link: string | null,
        cardID: string,
        img: string | null,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Images:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        image: string | null,
        cardID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        cardID: string,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
    cardParent:  {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    child:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard:  {
    __typename: "Card",
    id: string,
    name: string,
    description: string,
    coverImage: string | null,
    cardParentId: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Links:  {
      __typename: "ModelLinkConnection",
      items:  Array< {
        __typename: "Link",
        id: string,
        link: string | null,
        cardID: string,
        img: string | null,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Images:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        image: string | null,
        cardID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        cardID: string,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
    cardParent:  {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    child:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type GetLinkQueryVariables = {
  id: string,
};

export type GetLinkQuery = {
  getLink:  {
    __typename: "Link",
    id: string,
    link: string | null,
    cardID: string,
    img: string | null,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks:  {
    __typename: "ModelLinkConnection",
    items:  Array< {
      __typename: "Link",
      id: string,
      link: string | null,
      cardID: string,
      img: string | null,
      title: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLinksQuery = {
  syncLinks:  {
    __typename: "ModelLinkConnection",
    items:  Array< {
      __typename: "Link",
      id: string,
      link: string | null,
      cardID: string,
      img: string | null,
      title: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage:  {
    __typename: "Image",
    id: string,
    image: string | null,
    cardID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      image: string | null,
      cardID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncImagesQuery = {
  syncImages:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      image: string | null,
      cardID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote:  {
    __typename: "Note",
    id: string,
    text: string,
    cardID: string,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      text: string,
      cardID: string,
      title: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotesQuery = {
  syncNotes:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      text: string,
      cardID: string,
      title: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard:  {
    __typename: "Card",
    id: string,
    name: string,
    description: string,
    coverImage: string | null,
    cardParentId: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Links:  {
      __typename: "ModelLinkConnection",
      items:  Array< {
        __typename: "Link",
        id: string,
        link: string | null,
        cardID: string,
        img: string | null,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Images:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        image: string | null,
        cardID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        cardID: string,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
    cardParent:  {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    child:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCardsQuery = {
  syncCards:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateLinkSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateLinkSubscription = {
  onCreateLink:  {
    __typename: "Link",
    id: string,
    link: string | null,
    cardID: string,
    img: string | null,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateLinkSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateLinkSubscription = {
  onUpdateLink:  {
    __typename: "Link",
    id: string,
    link: string | null,
    cardID: string,
    img: string | null,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteLinkSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteLinkSubscription = {
  onDeleteLink:  {
    __typename: "Link",
    id: string,
    link: string | null,
    cardID: string,
    img: string | null,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateImageSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateImageSubscription = {
  onCreateImage:  {
    __typename: "Image",
    id: string,
    image: string | null,
    cardID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateImageSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateImageSubscription = {
  onUpdateImage:  {
    __typename: "Image",
    id: string,
    image: string | null,
    cardID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteImageSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteImageSubscription = {
  onDeleteImage:  {
    __typename: "Image",
    id: string,
    image: string | null,
    cardID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote:  {
    __typename: "Note",
    id: string,
    text: string,
    cardID: string,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote:  {
    __typename: "Note",
    id: string,
    text: string,
    cardID: string,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote:  {
    __typename: "Note",
    id: string,
    text: string,
    cardID: string,
    title: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateCardSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCardSubscription = {
  onCreateCard:  {
    __typename: "Card",
    id: string,
    name: string,
    description: string,
    coverImage: string | null,
    cardParentId: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Links:  {
      __typename: "ModelLinkConnection",
      items:  Array< {
        __typename: "Link",
        id: string,
        link: string | null,
        cardID: string,
        img: string | null,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Images:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        image: string | null,
        cardID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        cardID: string,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
    cardParent:  {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    child:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnUpdateCardSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard:  {
    __typename: "Card",
    id: string,
    name: string,
    description: string,
    coverImage: string | null,
    cardParentId: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Links:  {
      __typename: "ModelLinkConnection",
      items:  Array< {
        __typename: "Link",
        id: string,
        link: string | null,
        cardID: string,
        img: string | null,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Images:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        image: string | null,
        cardID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        cardID: string,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
    cardParent:  {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    child:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnDeleteCardSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard:  {
    __typename: "Card",
    id: string,
    name: string,
    description: string,
    coverImage: string | null,
    cardParentId: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Links:  {
      __typename: "ModelLinkConnection",
      items:  Array< {
        __typename: "Link",
        id: string,
        link: string | null,
        cardID: string,
        img: string | null,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Images:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        image: string | null,
        cardID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    Notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        cardID: string,
        title: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
    cardParent:  {
      __typename: "Card",
      id: string,
      name: string,
      description: string,
      coverImage: string | null,
      cardParentId: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Links:  {
        __typename: "ModelLinkConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Images:  {
        __typename: "ModelImageConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      Notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
      cardParent:  {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      child:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    child:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        description: string,
        coverImage: string | null,
        cardParentId: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};
