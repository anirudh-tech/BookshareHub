module.exports = {
    getSignup: (req, res) => {
        try {
            res.render("seller/signup",{messages: req.flash()})
        } catch (error) {
            console.log(error.message);
        }
    },

    
}