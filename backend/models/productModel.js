const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  SKU: {
    type: String,
    required: true,
  },
  QTY: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, 
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
