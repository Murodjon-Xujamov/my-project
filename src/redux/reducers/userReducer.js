const INITIAL_STATE = {
  list: [],
  loginStep: 0,
  loading: false,
  token: null,
  message: null,
  sidebarShow: "responsive",
  data: {},
  userInfo: {},
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

    // get me
    case "profile_info_start":
      return { ...state, loading: true, message: "" };
    case "profile_info_error":
      return { ...state, message: payload, loading: false };
    case "profile_info_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        userInfo: payload,
      };

    // create stream
    case "create_stream_start":
      return { ...state, loading: true, message: "" };
    case "create_stream_error":
      return { ...state, message: payload, loading: false };
    case "create_stream_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        userInfo: payload,
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
