import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

let store = createStore(
  rootReducer,
  //Redux-devTools ==> state 값들이 변경되는것을 확인 할 수 있다.
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
