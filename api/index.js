import express from 'express';
import { getMeasturments } from './routes/measurements.js';
import { getFrequencies } from './routes/frequencies.js';
import { getSensor, putSensor } from './routes/sensor.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use('/', (req, res, next) => {
    //RUN MIDDLEWARE HERE
    //USE THIS TO FOR EXAMPLE CHECK CREDENTIALS
    console.log('I ran just because somone accessed the api.')
    next()
})
app.get('/measurements', getMeasturments)
app.get('/frequencies', getFrequencies)
app.get('/sensor', getSensor)
app.put('/sensor', putSensor)

const { PORT } = process.env
app.listen({ port: PORT }, () => {
  console.log(`api listening on: ${PORT}`)   
})