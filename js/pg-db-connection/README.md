# PostgreSQL Connection Boilerplate (Node.js)

A clean, ready-to-use boilerplate for setting up a robust [PostgreSQL](https://www.postgresql.org/) database connection in a Node.js application using the popular `pg` (node-postgres) package. It utilizes connection pooling for optimal performance and `dotenv` for secure environment variable management.

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) installed locally, or access to a cloud Postgres database (e.g., Supabase, Neon, AWS RDS).

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repo-url>
cd postgres-connection-boilerplate
```

### 2. Install dependencies

Run the following command to install the required packages (`pg` and `dotenv`):

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory by copying the provided example file:

```bash
cp .env.example .env
```

Open the newly created `.env` file and update the variables with your actual PostgreSQL credentials:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=my_database
DB_PASSWORD=my_secure_password
DB_PORT=5432
```

### 4. Test the connection

Run the connection script to verify your database connection is working:

```bash
npm start
```

If successful, you should see an output in your terminal similar to:
```bash
✅ Connected to PostgreSQL successfully at: 2026-03-20T21:31:12.000Z
```

## 💻 Usage Within Your Application

This boilerplate exports a query function that uses connection pooling. You can import `db.js` into your other application files to execute queries safely.

Because the pool is used under the hood, you don't need to manually connect and disconnect a client for simple queries!

**Example `app.js`:**

```javascript
const db = require('./db');

async function fetchUsers() {
  try {
    // Pass queries and parameterized values to prevent SQL injection
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [1]);
    console.log('Fetched rows:', rows);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}

fetchUsers();
```

## 📦 Dependencies
- [pg (node-postgres)](https://node-postgres.com/) - Non-blocking PostgreSQL client for Node.js.
- [dotenv](https://github.com/motdotla/dotenv) - Module to load environment variables from a `.env` file.

## 📝 License

This project is licensed under the MIT License - feel free to use, modify, and distribute this boilerplate as needed!
