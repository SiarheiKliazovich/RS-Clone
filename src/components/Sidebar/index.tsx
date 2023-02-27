import "./sidebar.scss";
import { FunctionComponent } from "react";
import { SidebarType } from "../../types";
import classNames from "classnames";
import { lightTheme, nightTheme } from "../../data/constants";
import { useTranslation } from "react-i18next";
import SidebarLink from "./SidebarLink";

const Sidebar: FunctionComponent<SidebarType> = ({
  accentColor,
  isSidebarFixed,
  isSidebarAccentMode,
  isSidebarShow,
  isNightMode,
}: SidebarType) => {
  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const itemColor = isSidebarAccentMode
    ? {
        static: nightTheme.sidebarFontColor,
        hover: nightTheme.fontColor,
      }
    : accentColor;

  const { t } = useTranslation("dataLang");

  return (
    <nav
      className={classNames(
        "sidebar",
        { "sidebar--fixed": isSidebarFixed },
        { "sidebar--show": isSidebarShow }
      )}
      style={
        isSidebarAccentMode
          ? { backgroundColor: accentColor.static, color: itemColor.static }
          : { backgroundColor: backgroundColor, color: accentColor.static }
      }
    >
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <SidebarLink
            type={"dashboard"}
            to={""}
            title={t("menu.dashboard")}
            color={itemColor}
          />
          <SidebarLink
            type={"calendar"}
            to={"calendar"}
            title={t("menu.calendar")}
            color={itemColor}
          />
          <SidebarLink
            type={"orders"}
            to={"orders"}
            title={t("menu.orders")}
            color={itemColor}
          />
          <SidebarLink
            type={"users"}
            to={"users"}
            title={t("menu.users")}
            color={itemColor}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
