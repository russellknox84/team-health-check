import db from 'mongoose'
import model from '../app/mongo/model'
import { expect } from "chai";

db.Promise = global.Promise

afterEach(function (done) {
     db.connection.collections.healthdatas.drop(() => {
     done()
 })

})
describe("user data is persisted to database", () =>{
        let date
        let health_data
        date = new Date()

        beforeEach((done) => {
            health_data = new model({
                date: date,
                userResponse: [{name: "Russell"}]
            })  
            done()     
        })

        it("should sucessfull save data into db", (done) => {
             health_data.save()
                .then(data => {
                    expect(data)
                    done()
                })
            
        })

        it("should validate user date has been sent and stored successfully", (done) => {

            model.find({date})
                .then(data => {
                    expect(date).to.equal(date)
                    done()
                })
        })
})
