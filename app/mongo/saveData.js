import model from "./model"

const saveTeamHealthCheckData = (req, res) => {
    
    const data = new model({
        date: new Date(),
        userResponse: req.body.userResponse

    })

    data.save()
    res.send('success')
}

export default saveTeamHealthCheckData
