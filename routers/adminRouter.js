const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router()


router.route('/signup')
    .get(adminController.getSignup)


module.exports = router;