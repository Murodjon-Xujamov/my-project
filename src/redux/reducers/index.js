import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";
import locationReducer from "./locationReducer";

const reducer = combineReducers({
  user: userReducer,
  products: productReducer,
  orders: orderReducer,
  locations: locationReducer,
});

export default reducer;
