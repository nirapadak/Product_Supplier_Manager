const Order = require('../model/Order');
const Product = require('../model/Product');

exports.placeOrder = async (req, res) => {
  const { productId, quantity } = req.body;

  // Validate inputs
  if (!productId || !quantity) {
    return res.status(400).json({ message: "Product ID and quantity are required" });
  }

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (!product.suppliers || product.suppliers.length === 0) {
    return res.status(400).json({ message: "No suppliers available for this product" });
  }

  const bestSupplier = product.suppliers.reduce((min, s) =>
    s.price < min.price ? s : min
  );

  const totalPrice = bestSupplier.price * quantity;

  const order = new Order({
    productId,
    supplierId: bestSupplier.supplierId,
    quantity,
    totalPrice
  });

  await order.save();
  res.json(order);
};


exports.getOrders = async (req, res) => {
  const orders = await Order.find()
    .populate('productId')
    .populate('supplierId');
  res.json(orders);
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('productId')
    .populate('supplierId');
  res.json(order);
};

exports.getOrderbySupplier = async (req, res) => {
  const { supplierId } = req.params;
  const orders = await Order.find({ supplierId })
    .populate('productId')
    .populate('supplierId');
  res.json(orders);
};

exports.deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

exports.updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
};