import sensor from '../sensor.js'
import Measurement from '../db/models/Measurement.js'
import dbConnect from '../db/dbConnect.js'

const [getData, startStream, endStream, isOn] = sensor(1000)

setInterval(async () => {
    const data = getData()
    console.log("sensor data now: ")
    console.log(data)
    if (isOn()) {
        await dbConnect()
        Measurement.create({
            ...data,
            atDay: true,
        }).catch(console.error)
    }
}, 5000)

const getSensor = (req, res) => {
    res.send({state: isOn()})
}

const putSensor = (req, res) => {
    const { state } = req.body
    state ? startStream() : endStream()
    res.status(200).send()
}

export { getSensor, putSensor }