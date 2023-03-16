import sensor from "./sensor.js"
const [getData, startStream, endStream] = sensor(1000);

let n = 0
startStream();
setInterval(() => {
    n++
    console.log(getData())
    if (n > 1000) endStream();
}, 100)