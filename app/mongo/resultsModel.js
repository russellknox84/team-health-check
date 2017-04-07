import db from "./config"

const ResultsSchema = new db.Schema({
    _id: String,
    date: {type: Date, required: true}, 
    userResponse: {type: Array, required: true}
})

const resultsModel = db.model("Results", ResultsSchema)

export default resultsModel
