import { ILogin } from "../interfaces/login";
import { ILang } from "../interfaces/lang";
import { IOrdersList } from "../interfaces/ordersList";

export interface IStore {
  appInterface: IAppInterface;
  auth: ILogin;
  langReducer: ILang;
  ordersReducer: IOrdersList;
}

export interface IAppInterface {
  isSidebarFixed: boolean;
  isNightMode: boolean;
  isSidebarAccentMode: boolean;
  isNavbarNightMode: boolean;
  isProfileShow: boolean;
  isSidebarShow: boolean;
  accentColor: {
    static: string;
    hover: string;
  };
}

export interface IAppInterfaceLocalStorage {
  isSidebarFixed: boolean;
  isNightMode: boolean;
  isSidebarAccentMode: boolean;
  isNavbarNightMode: boolean;
  isProfileShow?: boolean;
  isSidebarShow?: boolean;
  accentColor: {
    static: string;
    hover: string;
  };
}

export enum ActionTypes {
  updateFixedSidebar = "UPDATE_FIXED_SIDEBAR",
  updateNightMode = "UPDATE_NIGHT_MODE",
  updateSidebarAccentMode = "UPDATE_SIDEBAR_ACCENT_MODE",
  updateAccentColor = "UPDATE_ACCENT_COLOR",
  updateNavbarNightMode = "UPDATE_NAVBAR_NIGHT_MODE",
  showProfile = "SHOW_PROFILE",
  showSidebar = "SHOW_SIDEBAR",
  resetInterfaceToDefault = "RESET_INTERFACE_TO_DEFAULT",
  registration = "REGISTRATION",
  authorization = "AUTHORIZATION",
  usersFetching = "USERS_FETCHING",
  usersFetched = "USERS_FETCHED",
  usersFetchingError = "USERS_FETCHING_ERROR",
  userDeleted = "USER_DELETED",
  ordersFetching = "ORDERS_FETCHING",
  ordersFetched = "ORDERS_FETCHED",
  ordersFetchingError = "ORDERS_FETCHING_ERROR",
  orderDeleted = "ORDER_DELETED",
  tieFetching = "TIE_FETCHING",
  tieFetched = "TIE_FETCHED",
  tieFetchingError = "TIE_FETCHING_ERROR",
  tieDeleted = "ORDER_DELETED",
  changeLanguage = "CHANGE_LANGUAGE",
  addtie = "ADDED_TIE",
  addTieFetching = "ADDTIE_FETCHING",
  addTieFetched = "ADDTIE_FETCHED",
  addTieFetchingError = "ADDTIE_FETCHED_ERROR",
  buyTieFetching = "buyTIE_FETCHING",
  buyTieFetchingError = "buyTIE_FETCHED_ERROR",
  buyTieFetched = "buyTIE_FETCHED",
  myTiesFetching = "MY_TIES_FETCHING",
  myTiesFetched = "MY_TIES_FETCHED",
  myTiesFetchingError = "MY_TIES_FETCHING_ERROR",
  myTieDeleted = "MY_TIE_DELETED",
  myOrdersFetching = "MY_ORDERS_FETCHING",
  myOrdersFetched = "MY_ORDERS_FETCHED",
  myOrdersFetchingError = "MY_ORDERS_FETCHING_ERROR",
  myOrderDeleted = "MY_ORDER_DELETED",
  favouriteTieFetching = "FAVOURITE_TIE_FETCHING",
  favouriteTieFetched = "FAVOURITE_TIE_FETCHED",
  favouriteTieFetchingError = "FAVOURITE_TIE_ERROR",
}
