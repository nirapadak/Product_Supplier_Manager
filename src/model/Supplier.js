const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: String,
  address: String,
  number: String,
}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);
