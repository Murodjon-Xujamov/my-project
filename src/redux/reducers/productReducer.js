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
    case "fetch_products_start":
      return { ...state, loading: true, message: "" };
    case "fetch_products_error":
      return { ...state, message: payload, loading: false };
    case "fetch_products_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        list: payload,
      };

    // one product
    case "fetch_one_product_start":
      return { ...state, loading: true, message: "" };
    case "fetch_one_product_error":
      return { ...state, message: payload, loading: false };
    case "fetch_one_product_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        data: payload,
      };

    /* other */
    default:
      return state;
  }
};
