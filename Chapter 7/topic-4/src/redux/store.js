import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import reducers
import rootReducers from "./reducers";

export default createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
