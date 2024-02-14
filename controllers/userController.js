module.exports = {
    getSignup: (req, res) => {
        try {
            res.render("user/signup",{messages: req.flash()})
        } catch (error) {
            console.log(error.message);
        }
    },


}