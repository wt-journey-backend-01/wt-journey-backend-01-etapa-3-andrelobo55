## Subir o banco com o Docker

- Para subir o banco com o Docker instale as dependências do dotenv executando no terminal:
```bash
npm install dotenv
```

- Crie um arquivo .env com as variáveis:
...
POSTGRES_USER=seu_usuario_postgres
POSTGRES_PASSWORD=sua_senha_postgres
POSTGRES_DB=policia_db
...

Obs.: adicione o .env ao arquivo .gitignore

- Crie um arquivo docker-compose.yml e adicione a configuração:
```yml
services:
  postgres:
    container_name: postgres_policia
    image: postgres:17
    restart: unless-stopped
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

- Execute o comando para subir o container:
```bash
docker-compose up -d
```

- Instale as dependências do knex e postgres:
```bash
npm install knex pg
```

- Crie um arquivo knexfile.js
```js
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    migrations: {
        directory: './db/migrations',
      },
    seeds: {
        directory: './db/seeds',
      },
  },
  ci: {
    client: 'pg',
    connection: {
      host: 'postgres', // Using the service name as the host
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  }

};
```

## Executando migrations

- Para executar as migrations, use:
```bash
npx knex migrate:latest
```

## Rodar seeds

- E para executar as seeds:
```bash
npx knex seed:run
```