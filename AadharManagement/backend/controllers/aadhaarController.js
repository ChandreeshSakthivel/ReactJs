const Aadhaar = require('../models/Aadhaar');

// Create Aadhaar
const createAadhaar = async (req, res) => {
  try {
    const { name, aadhaarNumber, dob, address } = req.body;
    const newAadhaar = new Aadhaar({ name, aadhaarNumber, dob, address });
    await newAadhaar.save();
    res.status(201).json(newAadhaar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Aadhaar
const getAllAadhaar = async (req, res) => {
  try {
    const aadhaars = await Aadhaar.find();
    res.status(200).json(aadhaars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Aadhaar by ID
const getAadhaarById = async (req, res) => {
  try {
    const aadhaar = await Aadhaar.findById(req.params.id);
    if (!aadhaar) return res.status(404).json({ error: 'Aadhaar not found' });
    res.status(200).json(aadhaar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Aadhaar
const updateAadhaar = async (req, res) => {
  try {
    const { name, dob, address } = req.body;
    const updatedAadhaar = await Aadhaar.findByIdAndUpdate(
      req.params.id,
      { name, dob, address },
      { new: true }
    );
    if (!updatedAadhaar) return res.status(404).json({ error: 'Aadhaar not found' });
    res.status(200).json(updatedAadhaar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Aadhaar
const deleteAadhaar = async (req, res) => {
  try {
    const deletedAadhaar = await Aadhaar.findByIdAndDelete(req.params.id);
    if (!deletedAadhaar) return res.status(404).json({ error: 'Aadhaar not found' });
    res.status(200).json({ message: 'Aadhaar deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAadhaar,
  getAllAadhaar,
  getAadhaarById,
  updateAadhaar,
  deleteAadhaar,
};
