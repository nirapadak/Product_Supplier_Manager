const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String, // Can be base64 or image URL
  suppliers: [
    {
      supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
      price: Number,
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
