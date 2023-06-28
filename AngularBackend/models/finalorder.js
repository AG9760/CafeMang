const mongoose = require("mongoose");
const finalorderSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  useremail: {
    type: String,
  },
  items: {
    type: Array,
    default: [],
  },
  totalprice: {
    type: Number,
  },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("finalorder", finalorderSchema);
