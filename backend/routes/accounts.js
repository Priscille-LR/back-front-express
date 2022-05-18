const express = require('express')
const router = express.Router()
const accountsCtrl = require('../controllers/accounts')
const auth = require('../middleware/auth')

router.get('/', auth, accountsCtrl.getAccounts)

module.exports = router