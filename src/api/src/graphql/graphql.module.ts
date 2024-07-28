import { Module } from '@nestjs/common';
import { createApolloClient } from 'src/config/graphql/graphql.config';
import { ApolloClientProviderKey } from 'src/constants/providers/ApolloClient';

@Module({
  providers: [
    {
      provide: ApolloClientProviderKey,
      useFactory: createApolloClient,
    },
  ],
  exports: [ApolloClientProviderKey],
})
export class GraphqlModule {}
