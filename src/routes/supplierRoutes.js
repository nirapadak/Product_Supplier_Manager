const express = require('express');
const router = express.Router();
const {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
  getSupplierbyId
} = require('../controllers/supplierController');

router.get('/get/supplier', getSuppliers);
router.get('/supplierbyid/:id', getSupplierbyId);
router.post('/create/supplier', addSupplier);
router.put('/supplier/update/:id', updateSupplier);
router.delete('/supplier/delete/:id', deleteSupplier);

module.exports = router;
