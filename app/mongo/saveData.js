import model from "./model"

import uuid from "uuid"

import projectModel from "./projectModel"
import questionModel from "./questionModel"
import surveyModel from "./surveyModel"
import resultsModel from "./resultsModel"

const saveTeamHealthCheckData = (req, res) => {

    const { userResponse, projectName, surveyName } = req.body

    projectModel.find({projectName})
        .populate("surveys")
        .then(survey => {
            const surveyName =  survey[0].surveys[0]

            const results = new resultsModel({
                _id: uuid.v4(),
                date: new Date(),
                userResponse
            }) 

            surveyName.results.push(results)
            surveyName.save()
            results.save()
        })
        .catch(err => console.log(err))

    res.send('success')
}

export default saveTeamHealthCheckData
