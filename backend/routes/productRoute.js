const express = require('express')
const { getProducts, createNote, deleteProduct } = require('../controllers/productController')


const router = express.Router();

router.route("/").get(getProducts)
router.route("/create").post(createNote)
router.route("/create").post(createNote)
router.route("/:sku").delete(deleteProduct)

module.exports = router;
