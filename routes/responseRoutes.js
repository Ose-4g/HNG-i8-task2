const router = require('express').Router()
const {
    createNewResponse
} = require('../controllers/responseController')

router.post('/',createNewResponse)

module.exports = router
