import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation CreateBook {
    createBook {
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
  mutation Mutation($updateBookId: ID!) {
    updateBook(id: $updateBookId) {
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
  mutation Mutation($deleteBookId: ID!) {
    deleteBook(id: $deleteBookId) {
      id
    }
  }
`;
