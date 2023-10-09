import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";
import { routerReducer } from "react-router-redux";
import productDetailsReducer from "../../services/ProductDetails/reducer";
const createHistory = require("history").createBrowserHistory;
export const history = createHistory();

const containersReducer = {
  containers: combineReducers({
    productDetailsReducer,
    // NOTE: put other app reducers here
  })
};

const createGlobalReducer = () =>
  combineReducers({
    ...containersReducer,
    route: routerReducer
  });

export default createGlobalReducer;
