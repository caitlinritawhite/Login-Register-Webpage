const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');


const typeDefs = require('./graphQL/typeDefs');
const resolvers = require('./graphQL/resolvers');
const { MONGODB } = require('./config');

const server = new ApolloServer({
  typeDefs,
  resolvers
});


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
