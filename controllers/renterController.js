module.exports = {
    getSignup: (req, res) => {
        try {
            res.render("renter/signup",{messages: req.flash()})
        } catch (error) {
            console.log(error.message);
        }
    },

    
}