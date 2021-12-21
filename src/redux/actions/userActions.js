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

// users
export const users = () => (dispatch) => {
  dispatch({ type: "users_info_start" });

  requests
    .users()
    .then(({ data }) => {
      dispatch({ type: "users_info_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Foydalanuvchi profilini yuklashda xatolik bor";

      dispatch({ type: "users_info_error", payload: message });
    });
};

// update user
export const userFindOne = (id) => (dispatch) => {
  dispatch({ type: "user_find_start", payload: id });

  requests
    .userFindOne(id)
    .then(({ data }) => {
      dispatch({ type: "user_find_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Foydalanuvchi profilini topib bo'lmadi";

      dispatch({ type: "user_find_error", payload: message });
    });
};

// update user
export const updateUser = (id, params) => (dispatch) => {
  dispatch({ type: "update_user_start", payload: { id, params } });

  requests
    .updateUser(id, params)
    .then(({ data }) => {
      dispatch({ type: "update_user_success", payload: data });
      toast.success("Saqlash");
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Foydalanuvchi profilini o'zgartirib bo'lmadi";
      toast.error(message);

      dispatch({ type: "update_user_error", payload: message });
    });
};

// delete user
export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: "delete_user_start", payload: id });

  requests
    .deleteUser(id)
    .then(({ data }) => {
      dispatch({ type: "delete_user_success", payload: { data, id } });
      toast.success("Uchirildi");
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Sizga bunaqa rol yuq iltimos uzinggizga kiling";
      toast.error(message);

      dispatch({ type: "delete_user_error", payload: message });
    });
};

// logout
export const logout = (params) => (dispatch) => {
  dispatch({ type: "logout", payload: params });
  window.localStorage.removeItem("@token");
  window.location.reload();
};
