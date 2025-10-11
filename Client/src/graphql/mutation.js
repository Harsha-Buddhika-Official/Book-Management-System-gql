import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation CreateBook($input: createBookInput!) {
    createBook(input: $input) {
      id
      title
      author
      year
      genre
      image
      description
      language
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook($updateBookId: ID!, $input: updateBookInput!) {
    updateBook(id: $updateBookId, input: $input) {
      id
      title
      author
      year
      genre
      image
      description
      language
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($deleteBookId: ID!) {
    deleteBook(id: $deleteBookId) {
      id
      title
    }
  }
`;
