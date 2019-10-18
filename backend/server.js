var express = require('express')
var mongoose = require('mongoose')
var cors = require("cors")

const MONGO_DB_ROUTE = 'mongodb+srv://admin:?ISdb#@learn-7ts10.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGO_DB_ROUTE, { useNewUrlParser: true })
// mongoose.connect(MONGO_DB_ROUTE, (err, client) => mongoDbConnect(err, client))

// const mongoDbConnect = (err, client) => {
//     console.log("Connected successfully to server", err, client);

//     const db = client.db(DB_NAME);

//     client.close();
// }

const db = mongoose.connection

const app = express()
app.use(cors())

const router = express.Router()

console.log('app', app);
console.log('db', db);
console.log('router', router);
// console.log('dbConnection', dbConnection);

