import sensor from "./sensor.js"
import dbConnect from "./db/dbConnect.js";
import dotenv from 'dotenv'
dotenv.config()
const [getData, startStream, endStream] = sensor(1000);
dbConnect();



let n = 0
startStream();
/*setInterval(() => {
    n++
    console.log(getData())
    if (n > 1000) endStream();
}, 100)*/