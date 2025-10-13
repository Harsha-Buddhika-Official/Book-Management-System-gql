import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($input: inputUser!) {
    loginUser(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

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
      enterTime
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

export const DELETE_BOOK = gql`
  mutation DeleteBook($deleteBookId: ID!) {
    deleteBook(id: $deleteBookId) {
      id
      title
    }
  }
`;
