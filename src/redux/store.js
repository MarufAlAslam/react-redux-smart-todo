import { createStore } from "redux";
import root from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(root, composeWithDevTools());

export default store;
