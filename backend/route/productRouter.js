const express = require("express");
const router = express.Router();
const {
  createdProduct,
  getAllProducts,
} = require("../controllers/productControllers");
const { uploadImage } = require("../controllers/uploadImage");
router.route("/").get(getAllProducts).post(createdProduct);
router.route("/uploadImage").post(uploadImage);
module.exports = router;
