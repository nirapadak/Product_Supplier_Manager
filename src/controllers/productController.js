
const Product = require('../model/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate('suppliers.supplierId');
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const { name, description, image, suppliers } = req.body;
  const product = new Product({ name, description, image, suppliers });
  await product.save();
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id)
    // .populate('productId')
    // .populate('supplierId');
  res.json(product);
};