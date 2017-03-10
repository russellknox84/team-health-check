import db from "./config"

const HeathDataSchema = new db.Schema({
    date: {type: Date, required: true}, 
    userResponse: {type: Array, required: true}
})
const model = db.model("HealthData", HeathDataSchema)

export default model