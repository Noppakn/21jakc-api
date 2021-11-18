const express = require('express')
const router = express.Router()
const user = require("../controllers/_master")

router.get('/search-all-user', user.masterUser)
router.post('/login',user.Login )
router.post('/create-user', user.createUser)
router.post('/search-by-user', user.searchByUser)
router.post('/update-user', user.updateUser)
module.exports = router;