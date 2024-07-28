FROM hasura/graphql-engine:v2.25.1-ce.cli-migrations-v3

WORKDIR /hasura

COPY ./ /hasura

ENV HASURA_GRAPHQL_MIGRATIONS_DIR=/hasura/migrations
ENV HASURA_GRAPHQL_METADATA_DIR=/hasura/metadata

ARG HASURA_GRAPHQL_ADMIN_SECRET
ARG HASURA_GRAPHQL_ENDPOINT

WORKDIR /hasura

ENTRYPOINT []
# no migrations -- for now
CMD ["sh", "-c", "hasura-cli migrate --all-databases default apply --skip-update-check --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET --endpoint $HASURA_GRAPHQL_ENDPOINT && hasura-cli metadata apply --skip-update-check --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET --endpoint $HASURA_GRAPHQL_ENDPOINT"]

