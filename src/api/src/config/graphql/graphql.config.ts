import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.HASURA_GRAPHQL_URL,
      fetch,
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      },
    }),
    cache: new InMemoryCache(),
  });
};
