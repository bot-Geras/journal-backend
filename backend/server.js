import express from 'express'

const PORT = 4000
const app = express()

app.get('/', (req,res) => res.send('Server is ready'))

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
