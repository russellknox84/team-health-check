import db from "./config"
import fs from "fs"

import projectModel from "./projectModel"
import questionModel from "./questionModel"
import surveyModel from "./surveyModel"

const getTeamHealthCheck = (req, res) => {
    const { project, survey } = req.params   
   
    projectModel.find({ projectName: project })
        .populate({
            path: "surveys",
            match: { "surveyName": survey },
            populate: { path: "questions" }
        })
        .lean()
        .then( surveys => {

            if (surveys[0].surveys[0].published === false) return res.send("No survey found. Please try again")
            const d = surveys[0].surveys[0].questions
            
            const a = d.map(a => {
                a.type = toLowerCase(a.type);
                return Object.assign({}, 
                
                 {"question": a.question,
                    "id": a.id,
                    "type": a.type,
                    "values": a.values,
                     "validation": "none",
                    "isMandatory": a.isMandatory
                 }
                 )
                })
        
        if (d.length === 0) return res.send("No survey found. Please try again")

            const newData = {
                  "health-check": {
                      "projectName": project,
                      "surveyName": survey,
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
