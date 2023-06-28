// const User = require("../models/user");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/authconfig");

exports.register = async (req, res) => {
  try {
    const { name, email, p1, phone } = req.body;
    const existingUser = await User.findOne({ email: email });
    // console.log(existingUser);
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name: name,
      email: email,
      password: p1,
      contact: phone,
    });

    await user.save();

    res.status(200).send({ msg: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.json({ msg: "Invalid email" });
    }
    console.log(user);
    // const match = await bcrypt.compare(password, user.password);

    if (user) {
      const payload = { userId: user._id, email: user.email, role: user.role };
      const token = jwt.sign(payload, config.secret, { expiresIn: 43200 });

      res.json({ token, role: user.role, id: user._id, useremail: user.email });
    } else {
      res.json({ msg: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong" });
  }
};
