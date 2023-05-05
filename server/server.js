const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const models = require('./models');
const db = require('./config/connection')
const PORT = process.env.PORT || 8000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`api server running on port ${PORT}`);
            console.log(`Use graphQL at http://localhost:${PORT}${server.graphqlPath}`)
        })
    })
};

startApolloServer(typeDefs, resolvers);