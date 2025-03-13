const mongoose = require('mongoose');

const AadhaarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhaarNumber: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('Aadhaar', AadhaarSchema);
