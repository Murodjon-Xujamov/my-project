import axios from "axios";

const url = `${process.env.REACT_APP_API_DOMAIN}api`;
const token = window.localStorage.getItem("@token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const requests = {
  authPassword: (username) => axios.post(`${url}/auth/register`, username),
  authLogin: (username) => axios.post(`${url}/auth/login`, username),
  getMe: () => axios.get(`${url}/profile`, config),
  // Product
  fetchProducts: () => axios.get(`${url}/products`, config),
  fetchProductOne: (id) => axios.get(`${url}/products/find/${id}`, config),
  // Order
  createOrder: (params) => axios.post(`${url}/orders`, params),
  // Stream
  createStream: (params) => axios.post(`${url}/stream`, params),
  // Locations
  getLocations: () => axios.get(`${url}/location`),
};

export default requests;
