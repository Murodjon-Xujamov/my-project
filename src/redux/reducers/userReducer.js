const INITIAL_STATE = {
  list: [],
  loginStep: 0,
  loading: false,
  token: null,
  message: null,
  sidebarShow: "responsive",
  data: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    // auth
    case "auth_password_start":
      return { ...state, loading: true, message: "" };
    case "auth_password_error":
      return { ...state, message: payload, loading: false };
    case "auth_password_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        loginStep: 1,
      };

    // Login
    case "auth_login_start":
      return { ...state, loading: true, message: "", success: false };
    case "auth_login_error":
      return { ...state, message: payload, loading: false };
    case "auth_login_success":
      window.localStorage.setItem("@token", payload.accessToken);
      return {
        ...state,
        loading: false,
        token: payload.accessToken,
        message: payload.message,
      };
    case "back_to_password":
      return {
        ...state,
        loginStep: 0,
      };

    // users all
    case "users_info_start":
      return { ...state, loading: true, message: "" };
    case "users_info_error":
      return { ...state, message: payload, loading: false };
    case "users_info_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        list: payload,
      };

    // user update
    case "user_find_start":
      return { ...state, loading: true, message: "" };
    case "user_find_error":
      return { ...state, message: payload, loading: false };
    case "user_find_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        data: payload,
      };
    case "user_clear_edit_success":
      return {
        ...state,
        data: {},
      };

    // user update
    case "update_user_start":
      return { ...state, loading: true, message: "" };
    case "update_user_error":
      return { ...state, message: payload, loading: false };
    case "update_user_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };

    // user delete
    case "delete_user_start":
      return { ...state, loading: true, message: "" };
    case "delete_user_error":
      return { ...state, message: payload, loading: false };
    case "delete_user_success":
      let newList = state.list.filter((item) => item._id !== payload.id);
      return {
        ...state,
        message: payload.message,
        loading: false,
        list: newList,
      };

    // profile
    case "logout":
      return { ...INITIAL_STATE };

    //sidebar toggle reducer
    case "sidebar_toggle":
      return { ...state, ...rest };

    /* other */
    default:
      return state;
  }
};
