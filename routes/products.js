const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controllers/products");

router.get("/products").use(getAllProducts)


module.exports = router;