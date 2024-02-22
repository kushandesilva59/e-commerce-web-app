const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
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
