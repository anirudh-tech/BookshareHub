const express = require('express');
const renterController = require('../controllers/renterController');
const router = express.Router()


router.route('/signup')
    .get(renterController.getSignup)


module.exports = router;