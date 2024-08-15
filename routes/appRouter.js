const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.get("/", appController.getIndex);
router.post("/categories/add", appController.addCategory);
router.post("/items/add", appController.addItem);
router.get("/items/:id", appController.getItems);
router.post("/items/delete/:id/:categoryId", appController.deleteItem);
router.post("/categories/delete/:id", appController.deleteCategory);

module.exports = router;
