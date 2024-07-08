# Personal Journaling App - Backend

## Overview

This backend service for the Personal Journaling App handles user authentication and journal entry management using Express and PostgreSQL.

## Features

- **User Authentication**
  - User registration
  - User login
  - User logout
- **Journal Entry Management**
  - Add new journal entries
  - Edit existing journal entries
  - Delete journal entries
  - View journal entries

## Technology Stack

- Node.js
- Express
- PostgreSQL
- bcrypt for password hashing

## Database Schema

### Users Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
); 

```

### Journal Entries Table

```sql
CREATE TABLE journal_entries (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);
```

### Installation

Install my-project with npm

```bash
 npm install my-project
  cd my-project
```

#### Prerequisites

-Node.js
-PostgreSQL
-Steps
Clone the repository:

```bash
git clone <https://github.com/bot-Geras/journal-backend.git>
cd personal-journaling-app-backend

```

Install dependencies:

`npm install`

## Environment Variables

Set up environment variables:
Create a .env file in the root directory and add the following:

`DB_HOST=your_database_host`
`DB_USER=your_database_user`
`DB_PASSWORD=your_database_password`
`DB_NAME=your_database_name`
`JWT_SECRET=your_secret_key`

## Initialize the database

Run the SQL scripts to create tables and insert predefined categories.
