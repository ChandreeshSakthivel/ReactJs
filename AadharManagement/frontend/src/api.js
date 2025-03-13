import axios from 'axios';

const API_URL = 'http://localhost:5002/api/aadhaar';

export const createAadhaar = async (data) => {
  return await axios.post(API_URL, data);
};

export const getAllAadhaar = async () => {
  return await axios.get(API_URL);
};

export const getAadhaarById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const updateAadhaar = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data);
};

export const deleteAadhaar = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
