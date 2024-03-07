const RenterBook = require('../models/renterbookModel')
module.exports = {
    getSignup: (req, res) => {
        try {
            res.render("renter/signup",{messages: req.flash()})
        } catch (error) {
            console.log(error.message);
        }
    },

    addedBooksList: async(req,res) => {
        const books = await RenterBook.find()
        console.log(books,'===')
        res.render('renter/renter-addedBooks',{books})
    },

    postAddBooks: async(req, res) => {
        try {
            req.body.image = req.file.filename
            await RenterBook.create(req.body)
            res.redirect('/renter/addedList')
        } catch (error) {
            console.log(error);
        }
    }
}