import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const API_ENDPOINTS = {
  BICYCLES: '/bicycles',
};

export async function fetchBicycles() {
  try {
    const { data } = await axios.get(`${API_ENDPOINTS.BICYCLES}`);
    return data;
  } catch (error) {
    return [];
  }
}
