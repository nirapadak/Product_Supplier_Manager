const express = require('express');
const router = express.Router();
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById
} = require('../controllers/productController');

router.get('/get/product', getProducts);
router.post('/create/product', addProduct);
router.put('/product/update/:id', updateProduct);
router.delete('/product/delete/:id', deleteProduct);
router.get('/ProdcutbyId/:id', getProductById);

module.exports = router;
