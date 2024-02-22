const express = require('express')
const { getProducts, createNote } = require('../controllers/productController')


const router = express.Router();

router.route("/").get(getProducts)
router.route("/create").post(createNote)

module.exports = router;
