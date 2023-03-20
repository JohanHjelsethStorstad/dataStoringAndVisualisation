import express from 'express';
import { getMeasturments } from './routes/measurements.js';
import { getFrequencies } from './routes/frequencies.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use('/', () => {
    //RUN MIDDLEWARE HERE
    //USE THIS TO FOR EXAMPLE CHECK CREDENTIALS
    console.log('I ran just because somone accessed the api.')
})
app.get('/measurements', getMeasturments)
app.get('/frequencies', getFrequencies)

const { PORT } = process.env
app.listen({ port: PORT }, () => {
  console.log(`server listening on: ${PORT}`)   
})