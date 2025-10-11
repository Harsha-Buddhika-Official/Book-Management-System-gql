import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      email
      password
    }
  }
`;

export const GET_BOOKS = gql`
  query Query {
    getBooks {
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
export const GET_BOOK_BY_ID = gql`
  query GetBookById($getBookByIdId: ID!) {
    getBookById(id: $getBookByIdId) {
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

export const GET_USER_BY_ID = gql`
  query GetUserById($getUserByIdId: ID!) {
    getUserById(id: $getUserByIdId) {
      id
      name
      email
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation Mutation($deleteBookId: ID!) {
    deleteBook(id: $deleteBookId) {
      id
      title
    }
  }
`;
