const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router()

router.route('/signup')
    .get(userController.getSignup)


module.exports = router;