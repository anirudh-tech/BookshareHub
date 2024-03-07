const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router()

router.route('/signup')
    .get(userController.getSignup)
    .post(userController.postSignup)

router.route('/home')
    .get(userController.getHome)

router.route('/rent-a-book')
    .get(userController.getRentABook)


module.exports = router;