const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pagesRoutes = require('./pages/routes');
const graphqlRoutes = require('./graphql/routes');

const { ApolloServer , gql} = require('apollo-server-express');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const {sequelize, models} = require('./models')

// const createMockData = require('./create-mock-data');

// createMockData();


const app = express();

console.log(models)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {models}
});

server.applyMiddleware({ app });

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', pagesRoutes);
// app.use('/graphql', graphqlRoutes);

sequelize.sync();

app.listen(3060, () => {
  console.log('Express app listening on localhost:3060');
});
