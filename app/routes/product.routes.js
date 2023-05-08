module.exports = app => {
const products = require("../controllers/product.controller.js");

var router = require("express").Router();

router.post("/", products.create);
router.get('/',products.getProducts);
router.get('/:id',products.findOneProduct);
app.use("/api/products", router);
};
