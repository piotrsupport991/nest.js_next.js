#!/bin/bash

URL="https://local.hasura.nhost.run"
SECRET="nhost-admin-secret"

curl --location -v --request POST "$URL/v1/query" \
    --header 'X-Hasura-Role: admin' \
    --header "X-Hasura-Admin-Secret: $SECRET" \
    --header 'Content-Type: application/json' \
    --data-raw '{"type" : "export_metadata","args": {}}' > ./schema/hasura-metadata.json

apollo schema:download ./schema/graphql-schema.json --endpoint $URL/v1/graphql --header "X-Hasura-Admin-Secret: $SECRET" 
