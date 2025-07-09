const express = require('express');
const router = express.Router();
const {
  placeOrder,
  getOrders,
  getOrderById,
  getOrderbySupplier,
  deleteOrder,
  updateOrder
} = require('../controllers/orderController');

router.post('/create/order', placeOrder);
router.get('/get/order', getOrders);
router.get('/getone/:id', getOrderById);
router.delete('/delete/:id', deleteOrder);
router.put('/update/:id', updateOrder);
router.get('/findby/:supplierId', getOrderbySupplier);

module.exports = router;
