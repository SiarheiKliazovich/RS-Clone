import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";
import { ILogin } from "../interfaces/login";

/* eslint-disable */
const initialState: ILogin = {
  user: localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login")!).user
    : {},
  isLogin: localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login")!).isLogin
    : false,
};
/* eslint-enable */

export const auth = (state: ILogin = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.authorization:
      state = {
        ...state,
        user: action.payload.user,
        isLogin: action.payload.isLogin,
      };
      break;

    default:
      return state;
  }
  setToLocalStorage(state);

  return state;
};

const setToLocalStorage = (state: ILogin) => {
  const newStorage = Object.assign({}, state) as ILogin;

  localStorage.login = JSON.stringify(newStorage);
};
