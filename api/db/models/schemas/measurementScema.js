import mongoose from "mongoose"
const Schema = mongoose.Schema

const measurementSchema = new Schema({
    time: {
        type: Number,
        required: true,
    },
    atDay: {
        type: Boolean,
        required: true,
    },
    noice: {
        type: Number,
        required: true,
    },
    pollution: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
})

export default measurementSchema