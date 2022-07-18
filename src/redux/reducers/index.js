import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";

//combineReducers => reducer를 합쳐준다.
export default combineReducers({
  auth: authReducer,
  product: productReducer,
});
