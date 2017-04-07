import model from "./model"

const saveTeamHealthCheckData = (req, res) => {
    
    const data = new model({
        date: new Date(),
        userResponse: req.body.userResponse

    })

    model.find({projectTitle: req.body.projectTitle})
        .then(res => {
            const a = res.find({type: "Radio"})
            console.log(a)

        })

    //data.save()
    res.send('success')
}

export default saveTeamHealthCheckData
