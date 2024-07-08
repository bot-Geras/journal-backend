import express from "express"
import dotenv from 'dotenv'
dotenv.config()


import authRoutes from './routes/authRoutes.js';
import journalRoutes from './routes/journalRoutes.js';
import {query} from './utils/db.js';

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/journals', journalRoutes);

query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connected:', res.rows[0]);
    }
  });



app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
