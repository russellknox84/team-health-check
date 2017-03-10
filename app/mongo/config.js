import db from "mongoose"

db.connect('mongodb://localhost/teamHealthCheck', (err, cb) => {
    console.log('did I work??!')
})

export default db