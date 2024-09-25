import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { loginReducer } from "../reducers/auth/loginReducers";

const rootReducer = combineReducers({
  loginReducer,
});
const store = createStore(rootReducer);

const ConfigureStore = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ConfigureStore;