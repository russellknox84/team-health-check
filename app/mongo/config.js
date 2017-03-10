import db from "mongoose";

const DB_HOST = process.env.DB_HOST || 'mongodb://localhost/teamHealthCheck';
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
var DB_LOGIN = '';
if(DB_USER && DB_PASS) DB_LOGIN = `${DB_USER}:${DB_PASS}@`;

db.connect(`mongodb://${DB_LOGIN}${DB_HOST}`, (err, cb) => {
    console.log('connected')
})

export default db;