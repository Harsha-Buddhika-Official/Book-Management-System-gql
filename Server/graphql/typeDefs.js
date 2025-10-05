import { gql } from "apollo-server";

export const typeDefs = gql`
  type createUserInput {
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type Mutation {
    createUser(input: createUserInput): user
  }

  type user {
    id: ID!
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type Query {
    getUsers: [user!]!
    getUserById(id: ID!) : user!
  }
`;
