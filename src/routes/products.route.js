import express from "express";
import ProductsController from "../controllers/products.controller.js";
const productsRouter = express.Router();
const productsController = new ProductsController();
// get all products
productsRouter.get("/", productsController.getAllProducts);
// get product by id
productsRouter.get("/:id", productsController.getProductById);
// create new product
productsRouter.post("/", productsController.createProduct);
// update product
productsRouter.put("/:id", productsController.updateProduct);
// delete product
productsRouter.delete("/:id", productsController.deleteProduct);
export default productsRouter;
