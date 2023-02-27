import { AnyAction } from "redux";
import { accentColors } from "../data/constants";
import {
  ActionTypes,
  IAppInterface,
  IAppInterfaceLocalStorage,
} from "../interfaces/store";

const initialState = localStorage.interface
  ? Object.assign(JSON.parse(localStorage.interface), {
      isProfileShow: false,
      isSidebarShow: false,
    })
  : {
      isProfileShow: false,
      isSidebarShow: false,
      isSidebarFixed: false,
      isNightMode: false,
      isSidebarAccentMode: false,
      isNavbarNightMode: false,
      accentColor: {
        static: accentColors.default.static,
        hover: accentColors.default.hover,
      },
    };

export const appInterface = (
  state: IAppInterface = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.updateFixedSidebar:
      state = {
        ...state,
        isSidebarFixed: action.payload,
      };
      break;

    case ActionTypes.updateNightMode:
      state = {
        ...state,
        isNightMode: action.payload,
      };
      break;

    case ActionTypes.updateSidebarAccentMode:
      state = {
        ...state,
        isSidebarAccentMode: action.payload,
      };
      break;

    case ActionTypes.updateNavbarNightMode:
      state = {
        ...state,
        isNavbarNightMode: action.payload,
      };
      break;

    case ActionTypes.updateAccentColor:
      state = {
        ...state,
        accentColor: action.payload,
      };
      break;

    case ActionTypes.showProfile:
      state = {
        ...state,
        isProfileShow: !state.isProfileShow,
      };
      break;

    case ActionTypes.showSidebar:
      state = {
        ...state,
        isSidebarShow: !state.isSidebarShow,
      };
      break;

    case ActionTypes.resetInterfaceToDefault:
      state = {
        ...state,
        isSidebarFixed: false,
        isNightMode: false,
        isSidebarAccentMode: false,
        isNavbarNightMode: false,
        accentColor: {
          static: accentColors.default.static,
          hover: accentColors.default.hover,
        },
      };
      break;

    default:
      return state;
  }

  setToLocalStorage(state);

  return state;
};

const setToLocalStorage = (state: IAppInterface) => {
  const newStorage = Object.assign({}, state) as IAppInterfaceLocalStorage;

  delete newStorage.isProfileShow;
  delete newStorage.isSidebarShow;

  localStorage.interface = JSON.stringify(newStorage);
};
