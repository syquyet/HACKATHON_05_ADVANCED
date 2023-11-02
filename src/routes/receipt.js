import express from "express";
import ReceiptController from "../controllers/receipt.controller.js";
const receiptRouter = express.Router();
const receiptController = new ReceiptController();
// get receipt
receiptRouter.get("/", receiptController.getReceipt);
// patch receipt
receiptRouter.patch("/:id", receiptController.updateReceipt);

export default receiptRouter;
