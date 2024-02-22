const asyncHandler = require("express-async-handler");
const Product = require('../models/productModel')

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

const createProduct = asyncHandler(async (req, res) => {
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
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.findByIdAndDelete(product.id);
    res.json({ message: "Product removed!..." });
  } else {
    res.status(404).json({ message: "Product not found" });
    throw new Error("Product not found");
  }
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { sku, qty, name, description, images } = req.body;

  const product = await Product.findById(req.params.id);


  if (product) {
    product.sku = sku;
    product.qty = qty;
    product.name = name;
    product.description = description;
    product.images = images;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
    throw new Error("Product not found");
  }
});

const searchProduct = asyncHandler(async (req, res)=>{

  console.log(req.params.name);
  // res.send(req.params.name)


   try {
     
     const regex = new RegExp(req.params.name, "i"); // Case-insensitive search

     const products = await Product.find({ name: regex });
     res.json(products);
   } catch (error) {
     console.error("Error searching for products:", error);
     res.status(500).json({ error: "Internal server error" });
   }
})

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct,
  searchProduct,
};