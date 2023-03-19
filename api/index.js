import express from 'express';
import sensor from "./sensor.js"
import dbConnect from "./db/dbConnect.js";
import dotenv from 'dotenv'
dotenv.config()
const [getData, startStream, endStream] = sensor(1000);
dbConnect();
const app = express();

app.use('/', () => {
    //RUN MIDDLEWARE HERE
    //USE THIS TO FOR EXAMPLE CHECK CREDENTIALS
    console.log('I ran just because somone accessed the api.')
})
app.get('/measurements', (req, res) => {

})

const { PORT } = process.env
app.listen({ port: PORT }, () => {
  console.log(`server listening on: ${PORT}`)   
})