import db from 'mongoose'
import model from '../app/mongo/model'
import { expect } from "chai";

db.Promise = global.Promise

after(function (done) {
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
        it("should validate date has been sent and stored successfully", (done) => {
            model.find({date})
                .then(data => {
                    expect(data[0].date).to.deep.equal(date)
                    done()
                })
        })
        it("should validate user resposne object is persisted successfully", (done) => {
            model.find({date})
                .then(data => {
                    expect(data[0].userResponse[0]).to.deep.equal({name: "Russell"})
                    done()
                })
        })
})
