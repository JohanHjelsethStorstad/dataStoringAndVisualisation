import Measurement from '../db/models/Measurement.js'
import dbConnect from '../db/dbConnect.js'

const getMeasturments = async (req, res) => {
    const number = 100
    await dbConnect()
    let latestMeasturments = await Measurement.find().sort({ createdAt: -1 }).limit(number)
    latestMeasturments = latestMeasturments.map(x => {
        return { time: x.time, atDay: x.atDay, noice: x.noice, pollution: x.pollution} 
    })
    res.send({measturments: latestMeasturments})
}

export { getMeasturments }