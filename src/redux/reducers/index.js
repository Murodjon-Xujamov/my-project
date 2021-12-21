import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";

const reducer = combineReducers({
  user: userReducer,
  products: productReducer,
  orders: orderReducer,
});

export default reducer;
