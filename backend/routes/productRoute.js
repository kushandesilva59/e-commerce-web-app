const express = require('express')
const { getProducts, createProduct, deleteProduct, getProductById, updateProduct, searchProduct } = require('../controllers/productController')


const router = express.Router();

router.route("/").get(getProducts)
router.route("/search/:name").get(searchProduct)
router.route("/create").post(createProduct)
router.route("/:id").get(getProductById).delete(deleteProduct).put(updateProduct)

module.exports = router;
