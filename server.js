const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//db config
let db_url = 'mongodb://localhost/journal'
let mongoDB = process.env.MONGODB_URI || db_url

mongoose.connect(mongoDB, {
	useMongoClient: true
})
mongoose.Promise = global.Promise

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))
//end of db config

const routes = require('./routes/route.js')//import route
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', routes)


let port = 3000

app.listen(port, ()=> {
	console.log('Server is up and running on port ' + port)
})
