import fs from "fs";
class ReceiptController {
  getReceipt(req, res) {
    const fileReceipt = fs.readFileSync("./src/model/receipt.json", "utf8");
    const listReceipt = JSON.parse(fileReceipt);
    res.json(listReceipt);
  }
  updateReceipt(req, res) {
    const id = req.params.id;
    const  fileReceipt = fs.readFileSync("./src/model/receipt.json", "utf8");
    const listReceipt = JSON.parse(fileReceipt);
    



  }
}
export default ReceiptController;
