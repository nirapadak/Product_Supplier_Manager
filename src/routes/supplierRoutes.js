const express = require('express');
const router = express.Router();
const {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../controllers/supplierController');

router.get('/get/supplier', getSuppliers);
router.post('/create/supplier', addSupplier);
router.put('/supplier/update/:id', updateSupplier);
router.delete('/supplier/delete/:id', deleteSupplier);

module.exports = router;
