import express from "express"
import dotenv from 'dotenv'
dotenv.config()


import authRoutes from './routes/authRoutes';
import journalRoutes from './routes/journalRoutes';
import db from './utils/db';

const PORT = process.env.PORT || 4000
const app = express()
app.use('/api/auth', authRoutes);
app.use('/api/journals', journalRoutes);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

db.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connected:', res.rows[0]);
    }
  });



app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
