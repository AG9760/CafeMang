const mongoose = require("mongoose");
const foodSchema = mongoose.Schema({
  foodname: {
    type: String,
  },
  foodprice: {
    type: Number,
  },
  Selectedqty: {
    type: Number,
    default: 0,
  },
  foodimage: {
    type: String,
  },
  foodqty: {
    type: Number,
    default: 0,
  },
  // foodavail: {
  //   type: Boolean,
  //   default: false,
  // },
  // unlimited: {
  //   type: Boolean,
  //   default: false,
  // },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("food", foodSchema);
