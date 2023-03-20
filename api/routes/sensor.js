import sensor from '../sensor.js'

const [getData, startStream, endStream, isOn] = sensor(1000)

const getSensor = (req, res) => {
    res.send({state: isOn()})
}

const putSensor = (req, res) => {
    console.log(req)
}

export { getSensor, putSensor }