const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {

    const users = await User.find();
    res.json(users);
    
}