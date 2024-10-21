import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    hello: String
    getUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;
