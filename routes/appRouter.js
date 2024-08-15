const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.get("/", appController.getIndex);
router.post("/category/add", appController.addCategory);
router.post("/items/add", appController.addItem);
router.get("/items/:id", appController.getItems);
router.get("/manage", appController.getManage);

module.exports = router;
