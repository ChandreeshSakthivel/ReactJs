const express = require('express');
const router = express.Router();
const {
  createAadhaar,
  getAllAadhaar,
  getAadhaarById,
  updateAadhaar,
  deleteAadhaar,
} = require('../controllers/aadhaarController');

// Routes
router.post('/aadhaar', createAadhaar);
router.get('/aadhaar', getAllAadhaar);
router.get('/aadhaar/:id', getAadhaarById);
router.put('/aadhaar/:id', updateAadhaar);
router.delete('/aadhaar/:id', deleteAadhaar);

module.exports = router;
