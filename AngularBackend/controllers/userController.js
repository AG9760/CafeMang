// const User = require("../models/user");
const Food = require("../models/food");
const Feedback = require("../models/feedback");
const User = require("../models/user");
const Cart = require("../models/cart");
const Order = require("../models/finalorder");
const nodemailer = require("nodemailer");

exports.myProfile = async (req, res) => {
  let result;
  if (req.params.id !== "") {
    result = await User.find({ _id: req.params.id });
  } else {
    result = await User.find();
  }
  res.send(result);
};

exports.editProfile = async (req, res) => {
  console.log("editprofile", req.params.id);
  try {
    await User.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
      },
      {
        new: true,
      }
    );
    console.log("edited profile");
    res.status(201).json({ msg: "edited profile" });
  } catch (err) {
    console.log("something went wrong!!");
    res.json({ errormsg: "something went wrong!!" });
  }
};

exports.getAllFoodItem = async (req, res) => {
  console.log("in view food in the userrrrrrrrrr side");
  try {
    const items = await Food.find();
    console.log(items);
    res.send(items);
  } catch (err) {
    console.log("Some error while fetching food in userhome:", err);
    res.status(500).json({ errormsg: "Something went wrong" });
  }
};

exports.sendFeedback = async (req, res) => {
  try {
    const today = new Date();
    const date = today.toJSON().slice(0, 10);
    const fb = new Feedback({
      userid: req.userId,
      useremail: req.email,
      name: req.body.name,
      feedback: req.body.feedback,
      date: date,
    });
    await fb.save();
    console.log("Successfully sent your feedback");
    res.json({ msg: "Successfully sent your feedback" });
  } catch (error) {
    console.log("Something went wrong while sending feedback:", error);
    res.status(500).json({ errormsg: "Something went wrong" });
  }
};

exports.addtoCart = async (req, res) => {
  // console.log("bodyrequetstftf", req.body);
  try {
    const cart = await Cart.findOne({ userid: req.body.id });
    const items = [req.body.food];
    if (!cart) {
      console.log("firsttime");
      const newCart = new Cart({
        userid: req.body.id,
        useremail: req.body.useremail,
        items: items,
      });

      await newCart.save();
      res.json({ msg: "successfully added your new item" });
    } else {
      console.log("secondtime");
      secondTimeCart(req.body);
      res.json({ msg: "successfully added your item" });
    }
  } catch (error) {
    console.log("Something went wrong in add to cart:", error);
    res.status(500).json({ errormsg: "Something went wrong" });
  }
};

async function secondTimeCart(body) {
  try {
    const cart = await Cart.findOne({ userid: body.id });
    cart.items.map((obj) =>
      obj.foodname === body.food.foodname
        ? { ...obj, Selectedqty: body.food.Selectedqty }
        : ""
    );
    await cart.save();
    // if (cart.items.includes(body.food.foodname)) {
    //   cart.items.map((obj) =>
    //     obj.foodname === body.food.foodname
    //       ? { ...obj, Selectedqty: body.food.Selectedqty }
    //       : ""
    //   );
    //   await cart.save();
    //   console.log("Food item added to cart successfully");
    // } else {
    //   cart.items.push(body.food);
    //   // cart.total += foodItem.price;
    //   await cart.save();
    //   // console.log("Cart not found for the user");
    // }
  } catch (error) {
    console.log("Error while adding food item to cart:", error);
  }
  //update cart
  // Cart.updateOne({ userid: req.body.userId }, { items: body.items });
}

exports.getCart = async (req, res) => {
  try {
    const items = await Cart.find({ userid: req.params.id });
    const total = 100;
    res.send(items);
  } catch (error) {
    console.log("Something went wrong!!", error);
    res.status(500).json({ errormsg: "Something went wrong!!" });
  }
};

exports.deleteFromCart = async (req, res) => {
  try {
    const { itemname, userid } = req.params;
    console.log("fytdutfut", itemname);
    const cart = await Cart.findOne({ userid: userid });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Remove the item from the cart items array
    console.log("cc", cart.items);
    cart.items = cart.items.filter(
      (item) => item.foodname.toString() !== itemname
    );

    // Recalculate the total
    // cart.total = cart.items.reduce((total, item) => total + item.price, 0);

    await cart.save();

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Error while deleting cart item:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// exports.finalorder = async (req, res) => {
//   try {
//     console.log(req.body);

//     if (req.body.items) {
//       console.log("order submitted");
//       const newOrder = new Order({
//         userid: req.body.items.userid,
//         useremail: req.body.items.useremail,
//         items: req.body.items.items,
//         totalprice: req.body.total,
//         createdAt: req.body.createdAt,
//       });

//       await newOrder.save();
//       sendEmail(
//         "anshikaguptag5544@gmail.com",
//         "New Order Placed",
//         "Thank you for placing your order!"
//       );
//       Cart.deleteOne({ userid: req.body.items.userid }, (err) => {
//         if (err) {
//           console.log("Error emptying cart:", err);
//           res.status(500).json({ error: "Error emptying cart" });
//         } else {
//           console.log("Cart emptied successfully");
//           res.status(200).json({ message: "Order placed successfully" });
//         }
//       });
//       res.json({ msg: "successfully added your order" });
//     } else {
//       res.status(401).json({ errormsg: "Something went wrong" });
//     }
//   } catch (error) {
//     console.log("Something went wrong in add to order:", error);
//     res.status(500).json({ errormsg: "Something went wrong" });
//   }
// };

exports.finalorder = async (req, res) => {
  try {
    console.log(req.body);

    if (req.body.items) {
      console.log("order submitted");
      const newOrder = new Order({
        userid: req.body.items.userid,
        useremail: req.body.items.useremail,
        items: req.body.items.items,
        totalprice: req.body.total,
        createdAt: req.body.createdAt,
      });

      await newOrder.save();
      sendEmail(
        "anshikaguptag5544@gmail.com",
        "New Order Placed",
        "Thank you for placing your order!"
      );

      await Cart.deleteOne({ userid: req.body.items.userid }); // Use await to wait for the operation to complete

      console.log("Cart emptied successfully");
      res.status(200).json({ message: "Order placed successfully" });
    } else {
      res.status(401).json({ errormsg: "Something went wrong" });
    }
  } catch (error) {
    console.log("Something went wrong in add to order:", error);
    res.status(500).json({ errormsg: "Something went wrong" });
  }
};

exports.getfinalorder = async (req, res) => {
  try {
    const items = await Order.find({ userid: req.params.id });
    res.send(items);
  } catch (error) {
    console.log("Something went wrong!!", error);
    res.status(500).json({ errormsg: "Something went wrong!!" });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "developeranshu07@gmail.com",
    pass: "tjuwhbeqaaycpfki",
  },
});

function sendEmail(to, subject, text) {
  const mailOptions = {
    from: "developeranshu07@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
