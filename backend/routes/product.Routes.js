const express = require("express");
const router = express.Router();
const productController = require("../controller/product.Controller");
const authMiddleware = require("../middleware/auth.middleware");

/* ==========================
        READ ALL
========================== */
router.get("/products", productController.getProducts);

/* ==========================
        READ ONE
========================== */
router.get("/product/:id", productController.getProductById);

/* ==========================
        CREATE
========================== */
router.post("/product", authMiddleware, productController.createProduct);

/* ==========================
        UPDATE
========================== */
router.put("/product/:id", authMiddleware, productController.updateProduct);

/* ==========================
        DELETE
========================== */
router.delete("/product/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
