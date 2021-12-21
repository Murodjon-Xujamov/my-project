import requests from "../../helpers/requests";
import { toast } from "react-toastify";

// All products
export const fetchProducts = (params) => (dispatch) => {
  dispatch({ type: "fetch_products_start", payload: params });

  requests
    .fetchProducts(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_products_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Mahsulot topilmadi";
      toast.error("Not");
      dispatch({ type: "fetch_products_error", payload: message });
    });
};

// One product
export const fetchProductOne = (id) => (dispatch) => {
  dispatch({ type: "fetch_one_product_start", payload: id });

  requests
    .fetchProductOne(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_one_product_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Mahsulot topilmadi";
      toast.error("Not");
      dispatch({ type: "fetch_one_product_error", payload: message });
    });
};

// Update product
export const updateProduct = (id) => (dispatch) => {
  dispatch({ type: "update_product_start", payload: id });

  requests
    .updateProduct(id)
    .then(({ data }) => {
      dispatch({ type: "update_product_success", payload: data });
      toast.success("Saqlandi");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Mahsulot topilmadi";
      toast.error(message);
      dispatch({ type: "update_product_error", payload: message });
    });
};
