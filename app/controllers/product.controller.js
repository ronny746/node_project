const db = require("../models");
const Product = db.products;


exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tutorial
    const product = new Product({
        name: req.body.name,
        age: req.body.age,
    });
  
    // Save Tutorial in the database
    product
      .save(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };


  exports.getProducts = (req,res)=>{
    // const title = req.query.title;
    // console.log(title);
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    // console.log(condition);
  
    Product.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  }
  exports.findOneProduct = (req,res)=>{
      const id = req.params.id;
    Product.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
  }