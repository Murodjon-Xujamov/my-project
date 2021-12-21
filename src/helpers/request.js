import axios from "axios";

const url = `${process.env.REACT_APP_API_DOMAIN}api`;
const token = window.localStorage.getItem("@token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const requests = {
  authPassword: (username) => axios.post(`${url}/auth/register`, username),
  authLogin: (username) => axios.post(`${url}/auth/login`, username),
  getMe: () => axios.get(`${url}/auth/login`),
  users: () => axios.get(`${url}/users`, config),
  userFindOne: (id) => axios.get(`${url}/users/find/${id}`, config),
  updateUser: (id, params) => axios.put(`${url}/users/${id}`, params, config),
  deleteUser: (deleteId) => axios.delete(`${url}/users/${deleteId}`, config),
  // Product
  fetchProducts: () => axios.get(`${url}/products`, config),
  fetchProductOne: (id) => axios.get(`${url}/products/find/${id}`, config),
  updateProduct: (id) => axios.put(`${url}/products/${id}`, config),
  // Order
  fetchAllOrders: () => axios.get(`${url}/orders`, config),
};

export default requests;
