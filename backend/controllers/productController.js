const asyncHandler = require("express-async-handler");
const Product = require('../models/productModel')

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

const createNote = asyncHandler(async (req, res) => {
  const { sku, qty, name, images, description } = req.body;

  if (!sku || !qty || !name || !images || !description) {
    res.status(400);
    throw new Error("Please fil all the fields");
  } else {
    const product = new Product({ sku, qty, name, images, description });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.sku);

  if (product) {
    await Product.findByIdAndDelete(product.id);
    res.json({ message: "Product removed!..." });
  } else {
    res.status(404).json({ message: "Product not found" });
    throw new Error("Product not found");
  }
});

module.exports = { getProducts, createNote, deleteProduct };