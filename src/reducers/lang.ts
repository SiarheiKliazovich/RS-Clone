import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";
import { ILang } from "../interfaces/lang";

const initialState: ILang = {
  /* eslint-disable */
  lang: localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang")!).lang
    : "ru",
  /* eslint-enable */
};

export const langReducer = (state: ILang = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.changeLanguage:
      state = {
        ...state,
        lang: action.payload.lang,
      };
      break;

    default:
      return state;
  }
  setToLocalStorage(state);

  return state;
};

const setToLocalStorage = (state: ILang) => {
  const newStorage = Object.assign({}, state) as ILang;

  localStorage.lang = JSON.stringify(newStorage);
};
