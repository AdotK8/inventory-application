const Category = require("../models/category");
const Item = require("../models/item");
const mongoose = require("mongoose");

exports.getIndex = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.render("index", { categories: categories });
  } catch (error) {
    res.status(500).send("Error fetching categories: " + error.message);
  }
};

exports.addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();

    res.status(201).send(category);
  } catch (error) {
    res.status(400).send("Error creating category: " + error.message);
  }
};

exports.addItem = async (req, res) => {
  const categoryId = req.body.categoryId;
  console.log(categoryId);
  try {
    const item = new Item(req.body);
    await item.save();
    res.redirect(`/items/${categoryId}`);
  } catch (error) {
    res.status(400).send("Error creating item: " + error.message);
  }
};

exports.getItems = async (req, res) => {
  const { id } = req.params;

  try {
    const categoryItems = await Item.find({ categoryId: id }).exec();
    res.render("items", { categoryItems: categoryItems, categoryId: id });
  } catch (error) {
    res.status(500).send("Error fetching items: " + error.message);
  }
};

exports.getManage = async (req, res) => {
  res.render("manage");
};
