import fs from 'fs'

export default (app) => {
    app.get("/", (req, res) => {       
        fs.readFile(__dirname + "/../question-data.json", "utf8", (err, data) => {          
            const questionData = JSON.parse(data)
            res.render("health-check", questionData)
        })
    })
}