import express from 'express'
import path from 'path'

const app = express()

app.use('/static', express.static(path.resolve('public', 'static')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'routes', 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`frontend being served on ${process.env.PORT}`)
})