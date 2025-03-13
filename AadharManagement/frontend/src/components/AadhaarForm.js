import React, { useState } from 'react';
import { createAadhaar } from '../api';

const AadhaarForm = ({ onAadhaarCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    aadhaarNumber: '',
    dob: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAadhaar(formData);
      onAadhaarCreated(response.data);
      alert('Aadhaar created successfully!');
      setFormData({ name: '', aadhaarNumber: '', dob: '', address: '' });
    } catch (err) {
      alert('Error creating Aadhaar');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="aadhaarNumber"
        placeholder="Aadhaar Number"
        value={formData.aadhaarNumber}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AadhaarForm;
