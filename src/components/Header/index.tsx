import "./header.scss";
import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import flagUS from "../../assets/images/jpg/flag-us.jpg";
import flagRU from "../../assets/images/jpg/flag-ru.jpg";
import { HeaderType } from "../../types";
import { showSidebar, showProfile } from "../../actions";
import { nightTheme } from "../../data/constants";
import i18n from "../../i18n";
import { ILangReducer } from "../../interfaces/langReducer";
import { changeLanguage } from "../../actions";
import { IAuthReducer } from "../../interfaces/authReducer";
import { useLocation } from "react-router";
import classNames from "classnames";

const Header: FunctionComponent<HeaderType> = ({
  accentColor,
  isNavbarNightMode,
  children,
  isButtonVisible,
}: HeaderType) => {
  const dispatch = useDispatch();
  const backgroundColor = nightTheme.background.element;

  const lang = useSelector((state: ILangReducer) => state.langReducer);

  const location = useLocation();

  const [isFullWidth, setIsFullWidth] = useState<boolean>();

  useEffect(() => {
    if (location.pathname.includes("dashboard")) setIsFullWidth(true);
  }, [location]);

  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const handleLenguageChange = (): void => {
    if (lang.lang === "en") {
      i18n.changeLanguage("ru");
      dispatch(changeLanguage({ lang: "ru" }));
    } else if (lang.lang === "ru") {
      i18n.changeLanguage("en");
      dispatch(changeLanguage({ lang: "en" }));
    }
  };

  return (
    <header
      className="header"
      style={{
        backgroundColor: isNavbarNightMode
          ? backgroundColor
          : accentColor.static,
      }}
    >
      <div
        className={classNames("container", {
          "container--full-width": isFullWidth,
        })}
      >
        <div className="header__wrapper">
          {isButtonVisible && (
            <span
              title="header__hamburger"
              className="header__hamburger"
              onClick={() => dispatch(showSidebar())}
            ></span>
          )}
          {user.role === "ADMIN" || user.role === "MANAGER" ? (
            <Link className="header__link" to="/dashboard">
              <span className="header__logo"></span>
            </Link>
          ) : (
            <Link className="header__link" to="/">
              <span className="header__logo"></span>
            </Link>
          )}
          {children}
          <ul className="header__list">
            <li className="header__item">
              <div className="language">
                <button
                  title="button__lang"
                  className="button__lang"
                  onClick={handleLenguageChange}
                >
                  <img
                    className="language__icon"
                    src={lang.lang === "en" ? flagUS : flagRU}
                    alt="Current language"
                  />
                </button>
                <span className="language__title">
                  {lang.lang === "en" ? "en" : "ru"}
                </span>
              </div>
            </li>
            <li
              title="header__profile"
              className="header__item"
              onClick={() => dispatch(showProfile())}
            >
              <span className="header__profile"></span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
