import model from "./model"

const getTeamHealthCheck = (req, res) => {
    model.find({}, (err, data) => {
        const userData = data.map((input) => {
            
            return Object.assign({}, {date: input.date}, {userResponse: input.userResponse})
        })
        console.log(userData)
        res.render("user-response", {data:getTeamHealthCheck})
    })
}

export default getTeamHealthCheck
