import { gql } from "apollo-server";

export const typeDefs = gql`
  input createUserInput {
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  
  input inputUser{
    email: String
    password: String
  }

  input createBookInput {
    title: String!
    author: String
    year: Int
    genre: String
    image: String
    description: String
    language: String
    enterTime: String
  }

  input updateBookInput {
    title: String
    author: String
    year: Int
    genre: String
    image: String
    description: String
    language: String
  }

  type Mutation {
    createUser(input: createUserInput): AuthPayload
    createBook(input: createBookInput): book
    loginUser(input: inputUser): AuthPayload
    updateBook(id: ID!, input: updateBookInput): book
    deleteBook(id: ID!): book
  }

  type AuthPayload {
    token: String!
    user: user!
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
    genre: String
    image: String
    description: String
    language: String
    enterTime: String
  }

  type Query {
    getUsers: [user]
    getBooks: [book]
    getUserById(id: ID!): user!
    getBookById(id: ID!): book!
    me: user
  }
`;
