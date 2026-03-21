const { Pool } = require('pg');
require('dotenv').config();

// create a new pool using the individual environment variables.
// a connection pool allows multiple concurrent connections to the database to be reused.
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  
  // alternatively, you can use a single DATABASE_URL connection string:

  // connectionString: process.env.DATABASE_URL,
});

// test the connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    // release the client back to the pool
    release();
    
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connected to PostgreSQL successfully at:', result.rows[0].now);
  });
});

// export a query function to allow safe parameterized queries throughout your web app
module.exports = {
  query: (text, params) => pool.query(text, params),
};





// AN ADDITION...
// IF YOU WANT TO USE THE POOL TO PERFORM QUERIES DIRECTLY IN THIS FILE, YOU CAN DO SO LIKE THIS:

/* 
const db = {
    query: (text, params) => pool.query(text, params),

    get: async (text, params) => {
      const { rows } = await pool.query(text, params);
      return rows[0];
    },

    all: async (text, params) => {
      const { rows } = await pool.query(text, params);
      return rows;
    },

    pool // expose the pool for more advanced usage if needed
};
*/