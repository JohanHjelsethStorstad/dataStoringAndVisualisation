import mongoose from "mongoose"
import measurementSchema from "./schemas/measurementScema.js"

const Measurement = mongoose.models.Measurement || mongoose.model("Measurement", measurementSchema)
export default Measurement