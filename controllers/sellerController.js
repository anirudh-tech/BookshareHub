const SellerBook = require('../models/sellerbookModel')
module.exports = {
    getSignup: (req, res) => {
        try {
            res.render("seller/signup",{messages: req.flash()})
        } catch (error) {
            console.log(error.message);
        }
    },

    addedBooksList: async(req,res) => {
        const books = await SellerBook.find()
        res.render('seller/seller-addedBooks',{books})
    },

    postAddBooks: async(req, res) => {
        try {
            req.body.image = req.file.filename
            await SellerBook.create(req.body)
            res.redirect('/seller/addedList')
        } catch (error) {
            console.log(error);
        }
    }



    
}