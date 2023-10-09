const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers= require('./resolvers');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://node:"+process.env.MONGO_ATLS_PSWD+"@cluster0.a1huopy.mongodb.net/?retryWrites=true&w=majority"
);

const PORT = 3601;

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.start().then(res => {
    server.applyMiddleware({ app, path: '/graphql' });
});


app.listen(PORT, () => { console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`) })
app.use(bodyParser.json());

