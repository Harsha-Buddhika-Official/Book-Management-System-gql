import { gql } from "@apollo/client";

export const DELETE_BOOK = gql`
  mutation Mutation($deleteBookId: ID!) {
    deleteBook(id: $deleteBookId) {
      id
    }
  }
`;
