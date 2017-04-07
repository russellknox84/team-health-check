import fs from 'fs'
import saveData from '../mongo/saveData'
import getData from '../mongo/getData'
import testData from "../mongo/testData"

export default (app) => {

    const render = (page, res) => res.render(page)

    app.get("/", (req, res) => {       
        fs.readFile(__dirname + "/../question-data.json", "utf8", (err, data) => {          
            const questionData = JSON.parse(data)
            res.locals.healthCheck = data
            res.render("health-check", questionData)
        })
    })
    app.get("/health-check-response", getData)

    app.get("/sucess", (req, res) => res.render("sucess"))

    app.get("/:project/:survey", testData)

    app.post("/user-data", saveData)
}