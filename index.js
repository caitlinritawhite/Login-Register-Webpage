// const express = require("express");
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config()

// const app = express();
const typeDefs = require('./graphQL/typeDefs');
const resolvers = require('./graphQL/resolvers');
// const { MONGODB } = require('./config');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }




const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/loginregisterpage',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
