import model from "./model"

const saveTeamHealthCheckData = (req, res) => {
    
    const data = new model({
        date: new Date(),
        userResponse: req.body.userResponse

    })

    data.save((err, cb) => console.log("now is hould have saved!"))
    res.send('w')
}

export default saveTeamHealthCheckData
