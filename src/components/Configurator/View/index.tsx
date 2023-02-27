import { FunctionComponent, useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./view.scss";

import colors from "../../../data/colors";
import tieWeaves from "../../../data/tieWeaves";
import useOnClickOutside from "../../../hook/useOnClickOutside";
import Hover from "../../Hover";
import FormSignIn from "../../FormSignIn";
import {
  ICategory,
  IIconSetting,
  IViewSetting,
} from "../../../interfaces/configurator";
import getTieColor from "../../../helpers/getTieColor/getTieColor";
import Accordion from "../../Accordion";
import configuratorSettings from "../../../helpers/configuratorSettings";
import iconMapping from "../../../helpers/iconMapping";
import IconFactory from "../IconFactory";
import configurator from "../../../data/configurator";
import { nightTheme } from "../../../data/constants";
import plainsLang from "../../../data/plaints";
import { ILangReducer } from "../../../interfaces/langReducer";
import { svg2img } from "../../../helpers/svg2img/svg2img";
import { IStore } from "../../../interfaces/store";
import { createOrder } from "../../../services/apiOrders";
import { IAuthReducer } from "../../../interfaces/authReducer";
import { IBuyTieReducer } from "../../../interfaces/buyTie";
import {
  buyTieFetching,
  buyTieFetched,
  buyTieFetchingError,
} from "../../../actions/buyTie/index";
import Breadcrumbs from "../Breadcrumbs";

const View: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode } = interfaceSettings;

  const backgroundColor = nightTheme.background.element;
  const [settings, setSettings] = useState<IIconSetting>({
    weave: "",
    bgColor: "",
    colorOne: "",
    colorTwo: "",
    colorThree: "",
    colorFour: "",
    colorFive: "",
    colorSix: "",
  });

  const URLParams = useParams();
  const location = useLocation();

  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(popupRef, () => setOpenPopup(!openPopup), openPopup);

  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  const language: "ru" | "en" = lang as "ru" | "en";
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const list = plainsLang.find((c) => c.lang === lang)!;

  const locationURL = location.pathname.split("/");
  const isPlains = Object.keys(URLParams).length === 0;
  const type = isPlains
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      locationURL[locationURL.length - 1]!
    : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      URLParams.type!;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tieList = configurator.find((c) => c.lang === lang)!;
  const tieCategory: ICategory = isPlains
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      tieList.data.find((tie) => tie.type === type)!
    : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      tieList.data.find((category) => category.type === URLParams.category)!;

  const price: string = isPlains
    ? tieCategory.price
    : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      tieList.data.find((category) => category.type === URLParams.category)!
        .price;
  const dispatch = useDispatch();
  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const buyTieStore = useSelector(
    (state: IBuyTieReducer) => state.buyTieReducer
  );
  const { buyTieLoadingStatus } = buyTieStore;

  useEffect(() => {
    dispatch(dispatch(buyTieFetching()));
  }, []);

  useEffect(() => {
    setSettings({
      ...settings,
      weave: tieWeaves[0].dataSrc,
      bgColor: getTieColor(colors[0].color.join()),
    });
  }, []);

  const createTieOrder = async () => {
    const image = svg2img("tie-factory");

    try {
      dispatch(buyTieFetching());
      if (!user._id) {
        setOpenPopup(!openPopup);
      } else {
        const body = {
          image,
          price: Number(price),
          sellerId: "0",
          userId: user._id,
        };
        const resp = await createOrder(body);
        if (resp.userId) {
          dispatch(buyTieFetched(resp));
        }
      }
    } catch (e) {
      dispatch(buyTieFetchingError());
    }
  };

  return (
    <>
      <div className="tie__container">
        <Breadcrumbs />
        <div className="plants__block-wrapper">
          <div className="preview-panel">
            <div className="image__wrapper">
              <IconFactory
                components={iconMapping}
                settings={settings}
                type={type}
              />
            </div>
          </div>
          <div className="edit-panel">
            <div className="edit-panel__title-wrapper">
              <h3 className="title-item">{list.data.title}</h3>
            </div>
            <div className="form-wrapper">
              {configuratorSettings(type).map((setting: IViewSetting) => {
                if (setting.type === "color") {
                  return (
                    <Accordion
                      title={setting.data[language]}
                      key={setting.data[language]}
                    >
                      <div className="title-form">{list.data.titleform}</div>
                      <ul className="colors-list ">
                        {colors.map((elem) => (
                          <li className="colors-item" key={elem.name}>
                            <label htmlFor="color-label">
                              <input
                                type="radio"
                                name={elem.name}
                                className="color-input"
                                onClick={() =>
                                  setSettings({
                                    ...settings,
                                    [setting.name]: getTieColor(
                                      elem.color.join()
                                    ),
                                  })
                                }
                              />
                              <span
                                className={classNames("tile-picker", {
                                  "tile-picker-selected":
                                    getTieColor(elem.color.join()) ===
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    settings[setting.name],
                                })}
                                style={{
                                  backgroundColor: getTieColor(
                                    elem.color.join()
                                  ),
                                }}
                              ></span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </Accordion>
                  );
                } else {
                  return (
                    <Accordion
                      title={setting.data[language]}
                      key={setting.data[language]}
                    >
                      <div className="weave-form__wrapper">
                        <div className="title-form">{list.data.wizardform}</div>
                        <div className="weave-list-wrapper">
                          <ul className="weave-list">
                            {tieWeaves.map((tieWeave) => (
                              <li
                                className="weave-list__item"
                                key={tieWeave.src}
                              >
                                <label htmlFor="" className="weave__label">
                                  <input
                                    className="weave__input"
                                    type="radio"
                                  />
                                  <span
                                    className={classNames("weave-span", {
                                      "weave-selected":
                                        tieWeave.dataSrc === settings.weave,
                                    })}
                                  >
                                    <img
                                      className="weave-img"
                                      src={tieWeave.src}
                                      alt=""
                                      onClick={() =>
                                        setSettings({
                                          ...settings,
                                          weave: tieWeave.dataSrc,
                                        })
                                      }
                                    />
                                  </span>
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Accordion>
                  );
                }
              })}
            </div>
            {buyTieLoadingStatus === "error" && (
              <div className="error-tooltip">
                <i className="fa fa-warning" />
                {list.data.errortooltip}
              </div>
            )}
            {buyTieLoadingStatus === "loaded" && (
              <div className="success-tooltip">
                <i className="fa fa-info" />
                {list.data.tooltip}{" "}
                <Link to="/my-orders">{list.data.myorders}</Link>
              </div>
            )}

            <div className="btn-next__wrapper">
              <p className="tie-price">
                {list.data.price}: <span>{price}$</span>
              </p>
              {!Object.keys(user).length || user.role === "USER" ? (
                <Hover>
                  <button
                    className="btn-link"
                    style={{
                      backgroundColor: isNavbarNightMode
                        ? backgroundColor
                        : accentColor.static,
                    }}
                    onClick={() => createTieOrder()}
                  >
                    <i className="fa fa-cart-plus" />
                    {list.data.btn}
                  </button>
                </Hover>
              ) : null}
            </div>
          </div>
        </div>
        <div className={classNames("popup-overlay", { overlay: openPopup })}>
          <div
            className={classNames("popup", { openpopup: openPopup })}
            ref={popupRef}
          >
            <FormSignIn />
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
