const express = require("express");
const router = express.Router();
const productController = require("../controller/product.Controller");
const authMiddleware = require("../middleware/auth.middleware");




router.get("/products",productController.getProducts);

router.post("/product",authMiddleware,productController.createProduct);


module.exports=router;