import { ActionTypes } from "../interfaces/store";
import { ILogin } from "../interfaces/login";
import { IUser } from "../interfaces/user";
import { IOrder } from "../interfaces/order";
import { ILang } from "../interfaces/lang";
import { ITie } from "../interfaces/tie";

export const updateFixedSidebar = (isSidebarFixed: boolean) => ({
  type: ActionTypes.updateFixedSidebar,
  payload: isSidebarFixed,
});

export const updateNightMode = (isNightMode: boolean) => ({
  type: ActionTypes.updateNightMode,
  payload: isNightMode,
});

export const updateSidebarAccentMode = (isSidebarAccentMode: boolean) => ({
  type: ActionTypes.updateSidebarAccentMode,
  payload: isSidebarAccentMode,
});

export const updateNavbarNightMode = (isNavbarNightMode: string) => ({
  type: ActionTypes.updateNavbarNightMode,
  payload: isNavbarNightMode,
});

export const updateAccentColor = (accentColor: {
  static: string;
  hover: string;
}) => ({
  type: ActionTypes.updateAccentColor,
  payload: accentColor,
});

export const resetInterfaceToDefault = () => ({
  type: ActionTypes.resetInterfaceToDefault,
});

export const showProfile = () => ({ type: ActionTypes.showProfile });

export const showSidebar = () => ({ type: ActionTypes.showSidebar });

export const registration = () => ({ type: ActionTypes.registration });

export const authorization = (user: ILogin, isLogin: boolean) => ({
  type: ActionTypes.authorization,
  payload: { user, isLogin },
});

export const usersFetching = () => {
  return {
    type: ActionTypes.usersFetching,
  };
};

export const usersFetched = (users: IUser[]) => {
  return {
    type: ActionTypes.usersFetched,
    payload: users,
  };
};

export const usersFetchingError = () => {
  return {
    type: ActionTypes.usersFetchingError,
  };
};

export const userDeleted = (id: string) => {
  return {
    type: ActionTypes.userDeleted,
    payload: id,
  };
};

export const ordersFetching = () => {
  return {
    type: ActionTypes.ordersFetching,
  };
};

export const ordersFetched = (orders: IOrder[]) => {
  return {
    type: ActionTypes.ordersFetched,
    payload: orders,
  };
};

export const ordersFetchingError = () => {
  return {
    type: ActionTypes.ordersFetchingError,
  };
};

export const orderDeleted = (id: string) => {
  return {
    type: ActionTypes.orderDeleted,
    payload: id,
  };
};

export const changeLanguage = (lang: ILang) => {
  return {
    type: ActionTypes.changeLanguage,
    payload: lang,
  };
};

export const myTiesFetching = () => {
  return {
    type: ActionTypes.myTiesFetching,
  };
};

export const myTiesFetched = (ties: ITie[]) => {
  return {
    type: ActionTypes.myTiesFetched,
    payload: ties,
  };
};

export const myTiesFetchingError = () => {
  return {
    type: ActionTypes.myTiesFetchingError,
  };
};

export const myTieDeleted = (id: string) => {
  return {
    type: ActionTypes.myTieDeleted,
    payload: id,
  };
};

export const myOrdersFetching = () => {
  return {
    type: ActionTypes.myOrdersFetching,
  };
};

export const myOrdersFetched = (orders: IOrder[]) => {
  return {
    type: ActionTypes.myOrdersFetched,
    payload: orders,
  };
};

export const myOrdersFetchingError = () => {
  return {
    type: ActionTypes.myOrdersFetchingError,
  };
};

export const myOrderDeleted = (id: string) => {
  return {
    type: ActionTypes.myOrderDeleted,
    payload: id,
  };
};
