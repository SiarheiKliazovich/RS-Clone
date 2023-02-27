import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import FormSignIn from "../FormSignIn";
import { Link } from "react-router-dom";

import "./favouritetie.scss";
import { IStore } from "../../interfaces/store";
import { nightTheme, lightTheme } from "../../data/constants";

import useOnClickOutside from "../../hook/useOnClickOutside";
import Hover from "../Hover";
import favouriteTieLang from "../../data/favouritetie";
import {
  favouriteTieFetching,
  favouriteTieFetched,
  favouriteTieFetchingError,
} from "../../actions/favouriteTie";
import { IFavouriteReducer } from "../../interfaces/favouriteTie";
import { ITie } from "../../interfaces/tie";
import { ILangReducer } from "../../interfaces/langReducer";
import { IAuthReducer } from "../../interfaces/authReducer";
import { IOrder } from "../../interfaces/order";
import { createOrder } from "../../services/apiOrders";

const FavoriteTie: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode, isNightMode } = interfaceSettings;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const [open, setOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(popupRef, () => setOpenPopup(!openPopup), openPopup);
  useOnClickOutside(ref, () => setOpen(!open), open);
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const listLang = favouriteTieLang.find((c) => c.lang === lang)!;

  const getfavouriteTie = localStorage.getItem("favouriteTie");
  const favouriteTie = getfavouriteTie ? JSON.parse(getfavouriteTie) : [];
  const [ties, setTies] = useState<ITie[]>(favouriteTie);

  const tiesStore = useSelector(
    (state: IFavouriteReducer) => state.favouriteTieReducer
  );
  const { favouriteTieLoadingStatus } = tiesStore;

  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const dispatch = useDispatch();

  const deleteTies = (id: string): void => {
    const favTies = ties.filter((tie) => tie._id !== id);

    setTies(favTies);
  };

  useEffect(() => {
    dispatch(dispatch(favouriteTieFetching()));
  }, []);

  const buyTie = async (
    formData: Pick<IOrder, "userId" | "image" | "price" | "sellerId">
  ) => {
    try {
      dispatch(favouriteTieFetching());
      if (!user._id) {
        setOpenPopup(!openPopup);
      } else {
        const body = {
          ...formData,
          userId: user._id,
        };
        const resp = await createOrder(body);
        if (resp.userId) {
          dispatch(favouriteTieFetched(resp));
        } else {
          dispatch(favouriteTieFetchingError());
        }
      }
    } catch (e) {
      dispatch(favouriteTieFetchingError());
    }
  };

  useEffect(() => {
    localStorage.setItem("favouriteTie", JSON.stringify(ties));
  }, [ties]);

  return (
    <main className="main-market">
      <div
        className="tiemarket-wrapper"
        style={{
          backgroundColor: isNightMode
            ? nightTheme.background.page
            : lightTheme.background.page,
        }}
      >
        <div className="container">
          <div
            className="tiemarket__banner-wrapper"
            style={{
              backgroundColor: isNightMode
                ? nightTheme.background.page
                : lightTheme.background.page,
            }}
          >
            <div className="market-block" style={{ backgroundColor }}>
              <div className="market-block__title_wrapper">
                <h4
                  className="market-block__title"
                  style={{
                    color: isNightMode
                      ? nightTheme.fontColor
                      : lightTheme.fontColor,
                  }}
                >
                  {listLang.data.title}
                </h4>
              </div>
              {favouriteTieLoadingStatus === "error" && (
                <div className="error-tooltip">
                  <i className="fa fa-warning" />
                  {listLang.data.errortooltip}
                </div>
              )}
              {favouriteTieLoadingStatus === "loaded" && (
                <div className="success-tooltip">
                  <i className="fa fa-info" />
                  {listLang.data.tooltip}{" "}
                  <Link to="/my-orders">{listLang.data.myorders}</Link>
                </div>
              )}
              <div className="market-block__products">
                <div className="row__products">
                  {ties?.map((tie) => {
                    const isLike =
                      ties.filter(
                        (favouriteTie: ITie) => favouriteTie._id === tie._id
                      ).length !== 0;
                    return (
                      <div className="tie__product" key={tie.name}>
                        <div className="tie__products_img">
                          <img
                            className="products_img"
                            src={tie.image}
                            alt=""
                          />
                        </div>
                        <div className="tie__products_discription">
                          <p className="tie__products_name">{tie.name}</p>
                          <p className="tie__products_price">
                            {listLang.data.price} {tie.price}$
                          </p>
                          <div className="tie__products_wrapper">
                            <Hover>
                              <button
                                className="tie__products_btn"
                                onClick={() =>
                                  buyTie({
                                    ...tie,
                                    sellerId: tie.userId,
                                  })
                                }
                                style={{
                                  backgroundColor: isNavbarNightMode
                                    ? backgroundColor
                                    : accentColor.static,
                                }}
                              >
                                <i className="fa fa-cart-plus" />
                                {listLang.data.btn}
                              </button>
                            </Hover>
                            <button
                              className={classNames("btn__like", {
                                nolike: !isLike,
                              })}
                              onClick={() => deleteTies(tie._id)}
                            >
                              <i className="fa fa-heart" />
                              {isLike
                                ? listLang.data.favourited
                                : listLang.data.favourite}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {ties.length === 0 && (
                    <p className="favourite-empty">{listLang.data.empty}</p>
                  )}
                </div>
              </div>
            </div>
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
    </main>
  );
};

export default FavoriteTie;
