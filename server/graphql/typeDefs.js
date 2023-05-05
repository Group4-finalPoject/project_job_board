const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Job {
    id: ID!
    name: String!
    company: String!
    description: String!
    category: String
    salary: Int!
  }

  type Query {
    jobs: [Job!]!
  }
`;

module.exports = typeDefs;