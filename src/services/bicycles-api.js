import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const API_ENDPOINTS = {
  BICYCLES: '/bicycles',
};

export async function fetchBicycles(page = 1) {
  try {
    const { data } = await axios.get(`${API_ENDPOINTS.BICYCLES}/?page=${page}`);
    return data;
  } catch (error) {
    return [];
  }
}

// export async function fetchProductDetails(productId) {
//   try {
//     const { data } = await axios.get(`${API_ENDPOINTS.PRODUCTS}/${productId}`);
//     return data;
//   } catch (error) {
//     return [];
//   }
// }
