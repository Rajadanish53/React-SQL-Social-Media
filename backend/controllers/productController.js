const db = require("../models");

//create main Model
const Product = db.products;
const Review = db.reviews;

//main work

//1. create product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published,
  };

  const product = await Product.create(info);
  res.status(201).send(product);
};

//2. get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    attributes: ["title", "price"],
  });
  res.status(200).send(products);
};

//3. get single product

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let products = await Product.findOne({
    where: {
      id,
    },
  });
  res.status(200).send(products);
};
//4. update  product

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, {
    where: {
      id,
    },
  });
  res.status(200).send(product);
};
//5. delete product

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.destroy({
    where: {
      id,
    },
  });
  res.status(200).send("Product deleted successfully");
};
//6. get published product

const getPublishedProducts = async (req, res) => {
  const products = await Product.findAll({
    where: {
      published: true,
    },
  });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProducts,
};
