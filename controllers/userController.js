const User = require("../models/userModel");

module.exports = {
  getSignup: (req, res) => {
    try {
      res.render("user/signup", { messages: req.flash() });
    } catch (error) {
      console.log(error.message);
    }
  },

  postSignup: async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Perform validation here if needed

    // Save the user to the database
    try {
      const newUser = new User({
        username: username,
        email: email,
        password: password,
        role: "user"
      });

      const savedUser = await newUser.save();

      // You may want to hash the password before saving it to the database in a real-world scenario

      res
        .status(201)
        .json({ message: "User created successfully", user: savedUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating user", error: error.message });
    }
  },

  getHome: async (req, res) => {
    res.render('user/userHome')
  },

  getRentABook: async (req,res) => {
    res.render('user/rent-a-book')
  }
};
