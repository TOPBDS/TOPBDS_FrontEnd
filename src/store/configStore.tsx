import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
});

const store = createStore(rootReducer);

const ConfigureStore = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ConfigureStore;