import express from "express"
import dotenv from 'dotenv'
dotenv.config()


const PORT = process.env.PORT || 4000
const app = express()
app.use('/api/auth', authRoutes);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.get('/', (req,res) => res.send('Server is ready'))

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
