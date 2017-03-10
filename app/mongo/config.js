import db from "mongoose"

const DB_HOST = process.env.DB_HOST || 'mongodb://localhost/teamHealthCheck';
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const CREDS = `${DB_USER}:${DB_PASS}`;

const URL = `mongodb://localhost/teamHealthCheck'`;

db.connect('mongodb://localhost/teamHealthCheck', (err, cb) => {
    console.log('connected')
})

export default db