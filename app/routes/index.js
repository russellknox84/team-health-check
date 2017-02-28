import fs from 'fs'

export default (app) => {
    app.get("/", (req, res) => {       
        fs.readFile(__dirname + "/../question-data.json", "utf8", (err, data) => {          
            const questionData = JSON.parse(data)
            res.locals.healthCheck = data
            res.render("health-check", questionData)
        })
    })
    app.post("/user-data", (req, res) => console.log(req.body))
}