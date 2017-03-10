import db from "mongoose"

db.connect('mongodb://localhost/teamHealthCheck', (err, cb) => {
    console.log('connected')
})

export default db