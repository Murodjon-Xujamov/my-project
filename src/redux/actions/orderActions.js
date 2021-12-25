import requests from "../../helpers/requests";
import { toast } from "react-toastify";

// All orders
export const createOrder = (params) => (dispatch) => {
  dispatch({ type: "create_order_start", payload: params });

  requests
    .createOrder(params)
    .then(({ data }) => {
      dispatch({ type: "create_order_success", payload: data });
      toast.success("Buyurtma saqlandi");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Mahsulot topilmadi";
      toast.error("Yuq qolmagan");
      dispatch({ type: "create_order_error", payload: message });
    });
};
