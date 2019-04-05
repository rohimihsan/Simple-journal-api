const express = require('express')
const router = express.Router()

const journalController = require('../app/controllers/journal.controller')

router.post('/journal/create', journalController.journalCreate)
router.get('/journal/all', journalController.journalList)

router.get('/journal/:id', journalController.journalDetail)
router.put('/journal/:id/update', journalController.journalUpdate)
router.delete('/journal/:id/delete', journalController.journalDelete)

router.get('/testo', journalController.testo)

module.exports = router
