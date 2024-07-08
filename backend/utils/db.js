import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
 
user: process.env.PGUSER,
password: process.env.PGPASSWORD,
host: process.env.PGHOST,
port: process.env.PGPORT,
database: process.env.PGDATABASE,
});



export  function query(text, params) { return pool.query(text, params); }