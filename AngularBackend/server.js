const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
//   next();
// });
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(express.json());
var cors = require("cors");
app.use(cors());
// app.use(authRoutes);
app.use(adminRoutes);
app.use(userRoutes);
app.use("/auth", authRoutes);

mongoose
  .connect(
    "mongodb+srv://project:system@cluster0.mzpdozs.mongodb.net/CafeMang?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080);
    console.log("Db connected");
    // console.log(result);
  })
  .catch((err) => {
    console.log("Some error ocurred");
    console.log(err);
  });
