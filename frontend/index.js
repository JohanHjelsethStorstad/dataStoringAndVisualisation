import express from 'express'
import path from 'path'

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`frontend being served on ${process.env.PORT}`)
})