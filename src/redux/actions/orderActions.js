import requests from "../../helpers/requests";
import { toast } from "react-toastify";

// All orders
export const fetchAllOrders = () => (dispatch) => {
  dispatch({ type: "fetch_orders_start" });

  requests
    .fetchAllOrders()
    .then(({ data }) => {
      dispatch({ type: "fetch_orders_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Mahsulot topilmadi";
      toast.error("Yuq qolmagan");
      dispatch({ type: "fetch_orders_error", payload: message });
    });
};
