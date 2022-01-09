import requests from "../../helpers/requests";
import { toast } from "react-toastify";

// All products
export const getLocations = () => (dispatch) => {
  dispatch({ type: "fetch_locations_start" });

  requests
    .getLocations()
    .then(({ data }) => {
      dispatch({ type: "fetch_locations_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Mahsulot topilmadi";
      toast.error("Not");
      dispatch({ type: "fetch_locations_error", payload: message });
    });
};
