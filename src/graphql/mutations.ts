/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
