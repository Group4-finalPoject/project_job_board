const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    appliedJobs: [AppliedJob!]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Job {
    id: ID!
    name: String!
    company: String!
    description: String!
    category: String
    salary: Int!
  }
  type Application {
    id: ID!
    job: Job!
    user: User!
    status: String
  }


  

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    jobs: [Job!]!
    applications: [Application!]!
  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    applyToJob(jobId: ID!): Application
  
  }

  type AppliedJob {
    jobId: ID!
    salary: Float!
    name: String!
    company: String!
  }
`;

module.exports = typeDefs;
