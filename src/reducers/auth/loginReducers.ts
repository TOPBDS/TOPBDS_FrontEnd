import { CustomAction } from "../../util/interface/redux.interface";
import { LOGIN, LOGOUT } from "./loginAction";
import { loginState } from "./loginState";

export const loginReducer = (state = loginState, action: CustomAction) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        user: action.data,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
        user: null,
      };
    default:
      return state;
  }
};