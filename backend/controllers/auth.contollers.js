const User = require("../models/userModel")
const jwt = require("jsonwebtoken");


exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) return res.status(409).json({ message: "Email already exists" })

  const user = new User();
  user.username = username;
  user.email = email;
  user.password = password;


  if (role) user.role = role;
  await user.save();
  const { password: hashedPassword, ...newUser } = user.toJSON()
  res.status(201).json(newUser);
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  console.log(email)
  console.log(password)

  if (!user) return res.status(404).json({ message: "No User" });

  const isMatched = user.matchPassword(password);
  if (!isMatched) return res.status(404).json({ message: "Wrong Password" });

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY);
  const role = user.role;
  res.json({ token, role})

}

