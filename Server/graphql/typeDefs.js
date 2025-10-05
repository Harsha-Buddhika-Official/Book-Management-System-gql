import { gql } from "apollo-server";

export const typeDefs = gql`
  input createUserInput {
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
  }

  type Query {
    getUsers: [user]
    userCount: Int
    getUserById(id: ID!): user!
  }
`;
