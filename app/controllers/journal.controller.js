const Journal = require('../models/journal.model')
const moment = require('moment')

exports.journalCreate = function (req, res, next) {
	let journal = new Journal({
		title: req.body.title,
		description: req.body.description,
		created_at: moment(Date.now()).format()
	})

	journal.save(function(err){
		if(err) {
			return next(err)
		}
		res.send('Journal Created Successfuly')
	})
}

exports.journalDetail = function(req, res, next){
	Journal.findById(req.params.id, (err, journal) => {
		if(err) return next(err)
		res.send(journal)
	})
}

exports.journalList = (req, res, next) => {
//	Journal.find({}, (err, journal) => {
//		if(err) return next(err)

//		var journalMap = {}
//		journal.forEach(function(journal){
//			journalMap[journal._id] = journal
//		})
//		res.send(journalMap)
//	})
	Journal.find({}).then((journal) => {
		res.send(journal)
	})
}

exports.journalUpdate = function(req, res, next) {
	let newData = req.body
	newData['updated_at'] =moment(Date.now()).format()

	Journal.findByIdAndUpdate(req.params.id, {$set: newData},
	function(err, journal) {
		if(err) return next(err)
		res.send('Journal Updated')
	})
}

exports.journalDelete = (req, res, next) => {
	Journal.findByIdAndRemove(req.params.id, (err) => {
		if(err) return next(err)
		res.send('Deleted Successfully')
	})
}

exports.testo = function(req, res){
	res.send("It Works ! "+ moment(Date.now()).format())
}
