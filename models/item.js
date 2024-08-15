const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },

  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
