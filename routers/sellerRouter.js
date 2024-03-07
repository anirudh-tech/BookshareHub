const express = require('express');
const sellerController = require('../controllers/sellerController');
const router = express.Router()
const upload = require('../middlewares/upload')


router.route('/signup')
    .get(sellerController.getSignup)

router.route('/addedList')
    .get(sellerController.addedBooksList)

router.route('/addBook')
    .post(upload.single('image'), sellerController.postAddBooks)

module.exports = router;