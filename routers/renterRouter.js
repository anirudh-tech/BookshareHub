const express = require('express');
const renterController = require('../controllers/renterController');
const router = express.Router()
const upload = require('../middlewares/upload')



router.route('/signup')
    .get(renterController.getSignup)

router.route('/addedList')
    .get(renterController.addedBooksList)

router.route('/addBook')
    .post(upload.single('image'), renterController.postAddBooks)
module.exports = router;