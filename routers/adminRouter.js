const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router()


router.route('/signup')
    .get(adminController.getSignup)

router.route('/admin-home')
    .get(adminController.getAdminHome)

router.route('/users-list')
    .get(adminController.getUsersList)

router.route('/sellers-list')
    .get(adminController.getSellersList)

router.route('/books-list')
    .get(adminController.getBooksList)


module.exports = router;