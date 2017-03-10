import model from "./model"

const getTeamHealthCheck = (req, res) => {
    model.find({}, (err, data) => {
        const userDate = data.map((input) => {
            
            return Object.assign({}, {date: input.date}, {userResponse: input.userResponse})
        })
        console.log(userDate)
        res.render("user-response", {data: userDate})
    })
}

export default getTeamHealthCheck
