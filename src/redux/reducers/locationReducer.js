const INITIAL_STATE = {
  list: [],
  loginStep: 0,
  loading: false,
  message: null,
  sidebarShow: "responsive",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    // all products
    case "fetch_locations_start":
      return { ...state, loading: true, message: "" };
    case "fetch_locations_error":
      return { ...state, message: payload, loading: false };
    case "fetch_locations_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        list: payload,
      };

    /* other */
    default:
      return state;
  }
};
