const mongoose = require('mongoose')
const Schema = mongoose.Schema

let JournalSchema = new Schema({
	title:{type: String, required: true, max:180},
	description:{type: String, required: true},
	created_at:{type: Date, required: false},
	updated_at:{type: Date, required: false}
})

//Export the model
module.exports = mongoose.model('Journal', JournalSchema)
