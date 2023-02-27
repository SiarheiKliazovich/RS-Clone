import { ActionCreator, AnyAction } from "redux";
import { IOrder } from "../interfaces/order";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Moment } from "moment/moment";
import { IDayData } from "../interfaces/dayData";

export type HeaderType = {
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
  children?: ReactNode;
  isButtonVisible: boolean;
};

export type SidebarType = {
  accentColor: {
    static: string;
    hover: string;
  };
  isSidebarFixed: boolean;
  isSidebarAccentMode: boolean;
  isSidebarShow: boolean;
  isNightMode: boolean;
};

export type ProfileType = {
  accentColor: {
    static: string;
    hover: string;
  };
  isNightMode: boolean;
  isSidebarFixed: boolean;
  isSidebarAccentMode: boolean;
  isNavbarNightMode: boolean;
  isProfileShow: boolean;
};

export type SwitchType = {
  action: ActionCreator<AnyAction>;
  isChecked: boolean;
  isNightMode: boolean;
  accentColor: {
    static: string;
    hover: string;
  };
};

export type SidebarIconType = {
  color: string;
  type: string;
};

export type SidebarLinkType = {
  type: string;
  to: string;
  title: string;
  color: {
    static: string;
    hover: string;
  };
};

export type HoverType = {
  children: JSX.Element;
};

export type ActiveType = {
  children: JSX.Element;
  classN: string;
};

export type CardType = {
  colors: {
    background: string;
    font: string;
  };
  value: string | number;
  title: string;
  icon: string;
};

export type CircularProgressType = {
  todaySales: number;
  monthRevenue: {
    current: number;
    prev: number;
  };
};

export type GraphType = {
  isNightMode: boolean;
  orders: IOrder[];
};

export type CalendarDayType = {
  day: Moment;
  isActiveMonth: boolean;
  status: {
    nonPaid: IOrder[];
    paid: IOrder[];
    inProgress: IOrder[];
    declined: IOrder[];
    finished: IOrder[];
    deadline: IOrder[];
  };
  setFocusedDay?: Dispatch<SetStateAction<IDayData>>;
};

export type CalendarListType = {
  day: Moment;
  status: {
    nonPaid: IOrder[];
    paid: IOrder[];
    inProgress: IOrder[];
    declined: IOrder[];
    finished: IOrder[];
    deadline: IOrder[];
  };
};
