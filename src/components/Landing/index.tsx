import { FunctionComponent, useState, useRef } from "react";
import "./landing.scss";
import Header from "../Header";
import Profile from "../Profile";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";
import navMenu from "../../data/navmenu";
import { ILangReducer } from "../../interfaces/langReducer";
import useOnClickOutside from "../../hook/useOnClickOutside";
import { Link } from "react-router-dom";
import classNames from "classnames";
import AudioPlayer from "../Home/AudioPlayer";

const Landing: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const {
    accentColor,
    isSidebarFixed,
    isSidebarAccentMode,
    isNavbarNightMode,
    isProfileShow,
    isNightMode,
  } = interfaceSettings;
  const backgroundColor = nightTheme.background.element;

  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const list = navMenu.find((c) => c.lang === lang)!;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(!open), open);

  const location = useLocation();
  return (
    <>
      <Header
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
        isButtonVisible={false}
      >
        <AudioPlayer />
        <div className="nav__hamburger-menu_wrapper" ref={ref}>
          <div className="nav__hamburger_wrapper">
            <span className="nav__hamburger" onClick={() => setOpen(!open)} />
          </div>
          <div
            className={classNames("nav-sidebar", { sidebaropen: open })}
            style={{
              backgroundColor: isNavbarNightMode
                ? backgroundColor
                : accentColor.static,
            }}
          >
            <div className="nav-sidebar-wrapper">
              <ul className="list-nav-sidebar">
                {list.data.map((item) => (
                  <li className="nav-sidebar-item" key={item.name}>
                    {location.pathname === item.path ? (
                      <span className="active-link">{item.name}</span>
                    ) : (
                      <Link className="nav-sidebar-link" to={item.path}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Header>
      <Profile
        accentColor={accentColor}
        isProfileShow={isProfileShow}
        isSidebarFixed={isSidebarFixed}
        isSidebarAccentMode={isSidebarAccentMode}
        isNavbarNightMode={isNavbarNightMode}
        isNightMode={isNightMode}
      />
      <div className="outlet_wrapper">
        <Outlet />
      </div>
      <Footer accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
    </>
  );
};
export default Landing;
