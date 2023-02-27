import { FunctionComponent, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { lightTheme, nightTheme } from "../../data/constants";
import { IStore } from "../../interfaces/store";
import Profile from "../Profile";
import Header from "../Header";
import Footer from "../Footer";
import useOnClickOutside from "../../hook/useOnClickOutside";
import navMenu from "../../data/navmenu";
import { ILangReducer } from "../../interfaces/langReducer";
import { IAuthReducer } from "../../interfaces/authReducer";

import "./myProfile.scss";

const MyProfile: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const [open, setOpen] = useState(false);
  const {
    accentColor,
    isSidebarFixed,
    isSidebarAccentMode,
    isNavbarNightMode,
    isProfileShow,
    isNightMode,
  } = interfaceSettings;
  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(!open), open);

  // eslint-disable-next-line
  const list = navMenu.find((c) => c.lang === lang)!;

  const currentURL = window.location.pathname;

  const { t } = useTranslation("dataLang");

  return (
    <>
      <div className="my-profile__wrapper">
        <div className="my-profile__content" style={{ backgroundColor }}>
          <div className="my-profile__image"></div>
          <div className="my-profile__text">{t("myProfile.email")}</div>
          <div className="my-profile__email">{user.email}</div>
          <div className="my-profile__text">{t("myProfile.date")}</div>
          <div className="my-profile__email">{user.date.slice(0, 10)}</div>
          <div className="my-profile__text">{t("myProfile.role")}</div>
          <div className="my-profile__email">{user.role}</div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
