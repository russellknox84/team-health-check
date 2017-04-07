import db from "./config"

const QuestionSchema = new db.Schema({
    _id: String,
})

const questionModel = db.model("Question", QuestionSchema)

export default questionModel
