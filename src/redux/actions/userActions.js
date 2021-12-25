import requests from "../../helpers/requests";
import { toast } from "react-toastify";

// auth
export const authPassword = (username) => (dispatch) => {
  dispatch({ type: "auth_password_start", payload: username });

  requests
    .authPassword(username)
    .then(({ data }) => {
      dispatch({ type: "auth_password_success", payload: data });
      toast.success("Full register");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      toast.error("Not");
      dispatch({ type: "auth_password_error", payload: message });
    });
};

export const authLogin = (params) => (dispatch) => {
  dispatch({ type: "auth_login_start", payload: params });

  requests
    .authLogin(params)
    .then(({ data }) => {
      dispatch({ type: "auth_login_success", payload: data });
      toast.success("Xush kilibsiz");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      toast.error(message);

      dispatch({ type: "auth_login_error", payload: message });
    });
};

// profile informations
export const profileInfo = () => (dispatch) => {
  dispatch({ type: "profile_info_start" });

  requests
    .getMe()
    .then(({ data }) => {
      dispatch({ type: "profile_info_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Foydalanuvchi profilini yuklashda xatolik bor";

      dispatch({ type: "profile_info_error", payload: message });
    });
};

// create stream
export const createStream = (params) => (dispatch) => {
  dispatch({ type: "create_stream_start", payload: params });

  requests
    .createStream(params)
    .then(({ data }) => {
      dispatch({ type: "create_stream_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Foydalanuvchi profilini yuklashda xatolik bor";

      dispatch({ type: "create_stream_error", payload: message });
    });
};

// logout
export const logout = (params) => (dispatch) => {
  dispatch({ type: "logout", payload: params });
  window.localStorage.removeItem("@token");
  window.location.reload();
};
