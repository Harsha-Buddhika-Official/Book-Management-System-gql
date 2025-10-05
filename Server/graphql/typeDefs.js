import { gql } from "apollo-server";

export const typeDefs = gql`
  input createUserInput {
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input createBookInput {
    title: String!
    author: String
    year: Int
    gener: String
    image: String
    description: String
    language: String
  }

  type Mutation {
    createUser(input: createUserInput): user
    createBook(input: createBookInput): book
  }

  type user {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type book {
    id: ID!
    title: String!
    author: String
    year: Int
    gener: String
    image: String
    description: String
    language: String
  }

  type Query {
    getUsers: [user]
    getBooks: [book]
    getUserById(id: ID!): user!
    getBookById(id: ID!): book!
  }
`;
