const express = require('express')
const router = express.Router()
const auth = require('../controller/auth.controller.js')

router.post('/signup', auth)

module.exports = router