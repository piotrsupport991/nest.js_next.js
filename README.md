# fullstack starter - Nhost + NestJS + NextJS

## Quick Start

1. **Clone project**

   ```bash
   git clone https://github.com/nozma-knows/fullstack-starter.git
   ```

2. **Install dependencies**

   1. Install Docker
   2. Install the nhost CLI

      ```bash
      sudo npm install -g nhost
      ```

3. **Set up and run services**

   1. Start the `nhost` service

      - Move into nhost directory and create `.secrets` file

        ```bash
        cd nhost
        cp .secrets.example .secrets
        ```

      - Paste environment variables into `.secrets`

      - Start Nhost and apply seed data (first time only):

        From within `nhost` run:

        ```bash
        nhost up --apply-seeds
        ```

      - For subsequent runs:

        From within `nhost` run:

        ```bash
        nhost up
        ```

      - To spin down:

        From within `nhost` run:

        ```bash
        nhost down
        ```

      - To reset local db:

        From within `nhost` run:

        ```bash
        nhost down --volumes
        ```

   2. Start the API - NestJS

      - Move into the api directory and install dependencies

        ```bash
        cd src/api
        yarn install
        ```

      - Move into the api directory and create `.env` file

        From within `src/api` run:

        ```bash
        cp .env.example .env
        ```

      - Paste environment variables into `.env`

      - Start the API

        From within `src/api` run:

        ```bash
        yarn run start:dev
        ```

   3. Start the APP - NextJS

   - Move into the app directory and install dependencies

     ```bash
     cd src/app
     yarn install
     ```

   - Create `.env` file

     From within `src/app` run:

     ```bash
     cp .env.example .env
     ```

   - Paste environment variables into `.env`

   - Start the APP

     From within `src/app` run:

     ```bash
     yarn run dev
     ```
