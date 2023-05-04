const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const models = require('./models');

const app = express();



// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ models, currentUser: req.user }),
});
server.applyMiddleware({ app });

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
