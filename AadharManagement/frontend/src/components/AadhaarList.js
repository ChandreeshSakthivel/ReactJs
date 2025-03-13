import React, { useEffect, useState } from 'react';
import { getAllAadhaar, deleteAadhaar } from '../api';

const AadhaarList = () => {
  const [aadhaars, setAadhaars] = useState([]);

  useEffect(() => {
    fetchAadhaars();
  }, []);

  const fetchAadhaars = async () => {
    try {
      const response = await getAllAadhaar();
      setAadhaars(response.data);
    } catch (err) {
      alert('Error fetching Aadhaar records');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAadhaar(id);
      fetchAadhaars();
      alert('Aadhaar deleted successfully!');
    } catch (err) {
      alert('Error deleting Aadhaar');
    }
  };

  return (
    <div>
      <h2>Aadhaar Records</h2>
      <ul>
        {aadhaars.map((aadhaar) => (
          <li key={aadhaar._id}>
            <p>Name: {aadhaar.name}</p>
            <p>Aadhaar Number: {aadhaar.aadhaarNumber}</p>
            <p>Date of Birth: {new Date(aadhaar.dob).toLocaleDateString()}</p>
            <p>Address: {aadhaar.address}</p>
            <button onClick={() => handleDelete(aadhaar._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AadhaarList;
