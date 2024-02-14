const express = require('express');
const sellerController = require('../controllers/sellerController');
const router = express.Router()


router.route('/signup')
    .get(sellerController.getSignup)


module.exports = router;