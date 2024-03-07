module.exports = {
    getSignup: (req, res) => {
        try {
            res.render("user/signup",{messages: req.flash()})
        } catch (error) {
            console.log(error.message);
        }
    },

    getAdminHome: (req,res) => {
        res.redirect("/admin/users-list")
    },

    getUsersList: (req,res) => {
        res.render("admin/admin-usersList")
    },

    getSellersList:(req, res) => {
        res.render("admin/admin-sellersList")
    },

    getBooksList: (req, res) => {
        res.render("admin/admin-booksList")
    },
    
}