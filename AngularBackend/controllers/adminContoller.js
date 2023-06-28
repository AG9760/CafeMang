const Feedback = require("../models/feedback");
const Food = require("../models/food");
const User = require("../models/user");

exports.addFood = async (req, res) => {
  console.log("in addfood", req.body);
  try {
    // const image = req.file;
    // const imageUrl = await fileUploadmiddleware.uploadImage(image);

    const foodname = req.body.foodname;
    const foodprice = req.body.foodprice;
    const foodimage = req.body.foodimage;
    const foodqty = req.body.foodqty;
    const Selectedqty = 1;

    const food = new Food({
      foodname: foodname,
      foodprice: foodprice,
      foodimage: foodimage,
      foodqty: foodqty,
      Selectedqty: Selectedqty,
    });
    food.save().then((food) => {
      console.log(food);
    });
    res.send({ message: "success" });
  } catch (error) {
    res.send({ message: "error" });
  }
};

exports.getallFoodItem = async (req, res) => {
  console.log("in view food");
  // Food.find().then((err, result) => {
  // if (err) {
  //   res.send(err);
  // }
  let result = await Food.find();
  res.send(result);
  // });
};

exports.getallFoodItemById = async (req, res) => {
  let result;
  if (req.params.id !== "") {
    result = await Food.find({ _id: req.params.id });
  } else {
    result = await Food.find();
  }
  res.send(result);
};

exports.editFood = async (req, res) => {
  console.log("editFood", req.params.id);
  await Food.updateOne(
    { _id: req.params.id },
    {
      foodname: req.body.foodname,
      foodprice: req.body.foodprice,
      foodqty: req.body.foodqty,
      foodavail: req.body.foodavail,
    },
    {
      new: true,
    }
  );
  res.send({ message: "success" });
};

exports.deleteFood = async (req, res) => {
  await Food.deleteOne({ _id: req.params.id });
  console.log("foodcrudbyadmin", " food crud operation done by admin!");
  return res.json({ msg: "food deleted by admin" });
};

exports.getallFeedback = async (req, res) => {
  console.log("in view food in the userrrrrrrrrr side");
  try {
    const feedback = await Feedback.find();
    console.log(feedback);
    res.send(feedback);
  } catch (err) {
    console.log("Some error while fetching feedback:", err);
    res.status(500).json({ errormsg: "Something went wrong" });
  }
};

exports.deleteFeedback = async (req, res) => {
  await Feedback.deleteOne({ _id: req.params.id });
  console.log("feedbackcrudbyadmin", " feedback crud operation done by admin!");
  return res.json({ msg: "feedback deleted by admin" });
};

exports.getallUser = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password -role");
    res.send(users);
  } catch (err) {
    console.log("error in get all user by admin");
    res.json({ errormsg: "Something went wrong" });
  }
};

exports.block = async (req, res) => {
  try {
    const id = req.params.id;
    await User.updateOne({ _id: id }, { blocked: true });
    console.log("blocked user");
    res.status(201).json({ msg: "blocked user!" });
  } catch (error) {
    console.log("error in block user by admin:", error);
    res.status(500).json({ errormsg: "Something went wrong" });
  }
};

exports.unblock = async (req, res) => {
  try {
    const id = req.params.id;
    await User.updateOne({ _id: id }, { blocked: false });
    console.log("unblocked user");
    res.status(201).json({ msg: "unblocked user!" });
  } catch (error) {
    console.log("error in unblock user by admin:", error);
    res.status(500).json({ errormsg: "Something went wrong" });
  }
};
