const INITIAL_STATE = {
  list: [],
  loginStep: 0,
  loading: false,
  message: null,
  sidebarShow: "responsive",
  data: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    // all products
    case "fetch_orders_start":
      return { ...state, loading: true, message: "" };
    case "fetch_orders_error":
      return { ...state, message: payload, loading: false };
    case "fetch_orders_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        list: payload.orders,
      };

    /* other */
    default:
      return state;
  }
};
