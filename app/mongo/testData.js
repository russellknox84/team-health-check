import db from "./config"
import fs from "fs"

const SurveySchema = new db.Schema({
    _id: String,
    questions: [{
        type: String,
        ref: "Question"
    }]
})

const models = db.model("Survey", SurveySchema)

const QuestionSchema = new db.Schema({
    _id: String,
})

const modelss = db.model("Question", QuestionSchema)

const ProjectSchema = new db.Schema({
    projectName: String,
    surveys: [{
        type: String,
        ref: "Survey"
    }]
})

const model = db.model('Project', ProjectSchema)

const getTeamHealthCheck = (req, res) => {
    const { project, survey } = req.params   

    model.find({ projectName: project })
        .populate({
            path: "surveys",
            match: { "surveyName": survey },
            populate: { path: "questions" }
        })
        .lean()
        .then( surveys => {
           
            const d = surveys[0].surveys[0].questions

            const a = d.map(a => {
    
                return Object.assign({}, 
                
                 {"question":"a.quesiton",
                    "id": a.id,
                    "type": a.type,
                    "values": a.values,
                     "validation": "none"
                 }
                 )
                })
                a.map(a => console.log(a.values))
        if (d.length === 0) return res.send("No survey found. Please try again")
            console.log(a, "testin")
            const newData = {
                  "health-check": {
                      "projectName": "g",
                      "questions": a
                  }
              }
           
            fs.readFile(__dirname + "/../question-data.json", "utf8", (err, data) => {          
                    const questionData = JSON.stringify(newData)
                    res.locals.healthCheck = questionData
         
                    res.render("health-check", newData)
            })
 
    })
    .catch(err => res.send("An error has occured. Please try again later."))
}

export default getTeamHealthCheck
