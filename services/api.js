import axios from 'axios';

const API_URL = 'http://192.168.1.5:3000/api'; 

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const fetchUsers = async () => {
  return axios.get(`${API_URL}/users`);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/users/${id}`);
};
