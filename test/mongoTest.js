import db from 'mongoose'
import model from '../app/mongo/model'

let dbConnection

beforeEach(function (done) {

    dbConnection = db.connect('mongodb://localhost/teamHealthCheck', (err, cb) => {

       
        
        return done()
    })
    
})
afterEach(function (done) {

    dbConnection.disconnect()
    return done()

})
describe("user data is persisted to database", (done) =>{
        it("should validate user date has been sent and stored successfully", () => {
            const date = new Date()
            const user = new model({
                date: date,
                userResponse: [{name: "Russell"}]
            })
            
            user.save((err, cb) => {
                model.find({userResponse['name']: "Russell"}, (err, data) => {
                    console.log(data)
                    //expect(data).to.deep.equal()
                })
            })
        })
})
