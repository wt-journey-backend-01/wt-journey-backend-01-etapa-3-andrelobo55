// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config();

const common = {
  client: 'pg',
  migrations: { directory: './db/migrations' },
  seeds: { directory: './db/seeds' }
};

module.exports = {
  development: {
    ...common,
    connection: {
      host: process.env.DB_HOST || '127.0.0.1', // Localmente usa localhost
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    }
  },
  ci: {
    ...common,
    connection: {
      host: process.env.DB_HOST || 'postgres', // No autograder vai usar 'postgres'
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    }
  }
};