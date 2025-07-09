const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  quantity: Number,
  totalPrice: Number
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
