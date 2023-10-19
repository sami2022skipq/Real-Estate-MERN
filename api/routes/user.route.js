const express= require('express')
const user = require('../controller/user.controller.js')

const router = express.Router()


router.get('/test', user )

module.exports = router