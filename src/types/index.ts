import { ActionCreator, AnyAction } from "redux";
import { ReactNode } from "react";

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
  value: string;
  title: string;
  icon: string;
};

export type CircularProgressType = {
  progress: number;
};

export type GraphType = {
  isNightMode: boolean;
};
