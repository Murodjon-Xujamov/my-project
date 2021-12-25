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
    /* other */
    default:
      return state;
  }
};
