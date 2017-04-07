import db from "./config"

const SurveySchema = new db.Schema({
    _id: String,
    questions: [{
        type: String,
        ref: "Question"
    }],
    results: [{
        type: String,
        ref: "Results"
    }],
})

const surveyModel = db.model("Survey", SurveySchema)

export default surveyModel