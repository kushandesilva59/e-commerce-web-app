const express = require('express')
const { getProducts, createProduct, deleteProduct, getProductById } = require('../controllers/productController')


const router = express.Router();

router.route("/").get(getProducts)
router.route("/create").post(createProduct)
router.route("/:id").get(getProductById).delete(deleteProduct)

module.exports = router;
