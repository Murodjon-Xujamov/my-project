const INITIAL_STATE = {
  list: [],
  loading: false,
  message: null,
  sidebarShow: "responsive",
  data: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
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
        data: payload,
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
