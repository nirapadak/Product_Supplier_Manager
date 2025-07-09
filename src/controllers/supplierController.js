const Supplier = require('../model/Supplier');

exports.getSuppliers = async (req, res) => {
  const suppliers = await Supplier.find();
  res.json(suppliers);
};

exports.addSupplier = async (req, res) => {
  const { name, address, number } = req.body;
  const supplier = new Supplier({ name, address, number });
  await supplier.save();
  res.json(supplier);
};

exports.updateSupplier = async (req, res) => {
  const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(supplier);
};

exports.deleteSupplier = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};


exports.getSupplierbyId = async (req, res) => {
  const OneSupplier = await Supplier.findById(req.params.id);

  if (OneSupplier) {
    res.json(OneSupplier);
  } else {
    res.json({
      "success": false,
      "massage": "Supplier not found"
    })
  }


};
