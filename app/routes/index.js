import fs from 'fs'

export default (app) => {

    const render = (page, res) => res.render(page)

    app.get("/", (req, res) => {       
        fs.readFile(__dirname + "/../question-data.json", "utf8", (err, data) => {          
            const questionData = JSON.parse(data)
            res.locals.healthCheck = data
            res.render("health-check", questionData)
        })
    })

    app.get("/sucess", (req, res) => res.render("sucess"))

    app.post("/user-data", (req, res) => {
        console.log(req.body.userResponse)
        res.send("done")
    })
}