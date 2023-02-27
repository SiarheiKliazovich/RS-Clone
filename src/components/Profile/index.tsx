import "./profile.scss";
import { FunctionComponent, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import Hover from "../Hover";
import { useDispatch, useSelector } from "react-redux";
import Switch from "./Switch";
import { ProfileType } from "../../types";
import { accentColors } from "../../data/constants";
import useOnClickOutside from "../../hook/useOnClickOutside";
import {
  updateFixedSidebar,
  updateNightMode,
  updateSidebarAccentMode,
  updateAccentColor,
  updateNavbarNightMode,
  showProfile,
  resetInterfaceToDefault,
} from "../../actions";
import { useTranslation } from "react-i18next";
import { IAuthReducer } from "../../interfaces/authReducer";
import { authorization } from "../../actions";
import { ILogin } from "../../interfaces/login";

const Profile: FunctionComponent<ProfileType> = ({
  accentColor,
  isProfileShow,
  isSidebarFixed,
  isSidebarAccentMode,
  isNavbarNightMode,
  isNightMode,
}: ProfileType) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const URLParams = useParams();

  const updateColor = (color: { static: string; hover: string }) =>
    dispatch(updateAccentColor(color));

  useOnClickOutside(ref, () => dispatch(showProfile()), isProfileShow);

  const { t } = useTranslation("dataLang");

  const styles = {
    backgroundColor: accentColor.static,
  };

  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user, isLogin } = authStore;

  const handlerSign = () => {
    if (isLogin) {
      dispatch(authorization({} as ILogin, false));
      localStorage.removeItem("favouriteTie");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div
      className={classNames("profile", { "profile--show": isProfileShow })}
      ref={ref}
    >
      <div className="profile__header">
        <h2 className="profile__title">{t("profile.profile")}</h2>
        <Hover>
          <button
            className="button profile__close"
            onClick={() => dispatch(showProfile())}
          >
            X
          </button>
        </Hover>
      </div>
      <div className="profile__wrapper">
        <div className="profile__user">
          <span className="profile__image"></span>
          <p className="profile__email">{user.email}</p>
          <p className="profile__role">{user.role}</p>
          <Hover>
            <button className="button profile__sign-out" onClick={handlerSign}>
              {isLogin ? t("profile.signOut") : t("profile.signIn")}
            </button>
          </Hover>
        </div>
        {user.role === "USER" ? (
          <div className="links__wrapper">
            <Hover>
              <Link style={styles} className="link" to="/profile">
                {t("profile.myProfile")}
              </Link>
            </Hover>
            <Hover>
              <Link style={styles} className="link" to="/my-orders">
                {t("profile.myOrders")}
              </Link>
            </Hover>
            <Hover>
              <Link style={styles} className="link" to="/favourite-tie">
                {t("profile.favourite")}
              </Link>
            </Hover>
          </div>
        ) : null}
        {user.role === "SELLER" ? (
          <div className="links__wrapper">
            <Hover>
              <Link style={styles} className="link" to="/profile">
                {t("profile.myProfile")}
              </Link>
            </Hover>
            <Hover>
              <Link style={styles} className="link" to="/my-ties">
                {t("profile.myTies")}
              </Link>
            </Hover>
            <Hover>
              <Link style={styles} className="link" to="/add-tie">
                {t("profile.addTie")}
              </Link>
            </Hover>
          </div>
        ) : null}
        <div className="settings">
          <h2 className="settings__title">{t("profile.settings")}</h2>
          <ul className="settings__list">
            <li className="settings__item">
              <span className="settings__name">{t("profile.nightMode")}</span>
              <Switch
                action={updateNightMode}
                accentColor={accentColor}
                isChecked={isNightMode}
                isNightMode={isNightMode}
              />
            </li>
            {Object.entries(URLParams).length !== 0 ? (
              <>
                <li className="settings__item">
                  <span className="settings__name">
                    {t("profile.sidebarFixed")}
                  </span>
                  <Switch
                    action={updateFixedSidebar}
                    accentColor={accentColor}
                    isChecked={isSidebarFixed}
                    isNightMode={isNightMode}
                  />
                </li>
                <li className="settings__item">
                  <span className="settings__name">
                    {t("profile.sidebarAccentMode")}
                  </span>
                  <Switch
                    action={updateSidebarAccentMode}
                    accentColor={accentColor}
                    isChecked={isSidebarAccentMode}
                    isNightMode={isNightMode}
                  />
                </li>
              </>
            ) : null}
            <li className="settings__item">
              <span className="settings__name">
                {t("profile.navbarNightMode")}
              </span>
              <Switch
                action={updateNavbarNightMode}
                accentColor={accentColor}
                isChecked={isNavbarNightMode}
                isNightMode={isNightMode}
              />
            </li>
          </ul>
          <div className="settings__colors">
            <h4 className="settings__subtitle">
              {t("profile.changeAccentColor")}
            </h4>
            <ul className="settings__list settings__list--row">
              <li className="settings__item">
                <span
                  className="settings__color settings__color--default"
                  onClick={() => updateColor(accentColors.default)}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--forest"
                  onClick={() => updateColor(accentColors.forest)}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--purple"
                  onClick={() => updateColor(accentColors.purple)}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--coffee"
                  onClick={() => updateColor(accentColors.coffee)}
                ></span>
              </li>
            </ul>
          </div>
          <Hover>
            <button
              className="button settings__button"
              onClick={() => dispatch(resetInterfaceToDefault())}
            >
              {t("profile.reset")}
            </button>
          </Hover>
        </div>
      </div>
    </div>
  );
};

export default Profile;
