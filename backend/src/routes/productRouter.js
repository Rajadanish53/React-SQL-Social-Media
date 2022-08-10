const productController = require("../controllers/productController");
const router = require("express").Router();

router.post("/", productController.addProduct);
router.get("/", productController.getAllProducts);
router.delete("/:id", productController.deleteProduct);
router.get("/getPublishedProducts", productController.getPublishedProducts);
router.put("/updateProduct", productController.updateProduct);
router.get("/:id", productController.getOneProduct);

module.exports = router;
