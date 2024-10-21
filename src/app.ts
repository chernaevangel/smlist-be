import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema'; // Add this import
import { typeDefs } from './schema/typeDefs';
import { userResolver } from './resolvers/userResolver';

const app = express();

// Use the express-graphql middleware
app.use('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({ typeDefs, resolvers: userResolver }),
  graphiql: true, // Enable GraphiQL for testing queries
}));

export default app;
