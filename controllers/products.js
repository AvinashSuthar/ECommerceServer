const Product = require("../models/product");

// get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Product Not found", error: error });
  }
};

// create product -- admin route
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ success: true, newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Product Not Created", error: error });
  }
};

// delete product -- admin route
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res
        .status(404)
        .json({ success: false, message: "No such Product exists" });
    } else {
      res.status(200).json({ success: true, deletedProduct });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Product Not Deleted", error: error });
  }
};

// update product -- admin route
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      res
        .status(404)
        .json({ success: false, message: "No such Product exists" });
    } else {
      res.status(200).json({ success: true, updatedProduct });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Product Not updated", error: error });
  }
};

// get single product
exports.getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      res
        .status(404)
        .json({ success: false, message: "No such Product exists" });
    } else {
      res.status(200).json({ success: true, product });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "No such Product exists" });
  }
};
