import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import FormSignIn from "../FormSignIn";

import "./tiemarket.scss";
import { IStore } from "../../interfaces/store";
import { nightTheme, lightTheme } from "../../data/constants";
import useOnClickOutside from "../../hook/useOnClickOutside";
import Hover from "../Hover";
import tieMarketLang from "../../data/tieMarket";

import {
  tieFetching,
  tieFetched,
  tieFetchingError,
} from "../../actions/tieMarket/index";
import {
  buyTieFetching,
  buyTieFetched,
  buyTieFetchingError,
} from "../../actions/buyTie/index";
import { getTies, getAnotherTiesForUser } from "../../services/apiTies";
import { ITiesReducer, ITie } from "../../interfaces/tie";
import { ILangReducer } from "../../interfaces/langReducer";
import Spinner from "../Spinner";
import { IBuyTieReducer } from "../../interfaces/buyTie";
import { IAuthReducer } from "../../interfaces/authReducer";
import { IOrder } from "../../interfaces/order";
import { createOrder } from "../../services/apiOrders";

const TieMarket: FunctionComponent = () => {
  const saved = localStorage.getItem("favouriteTie");
  const [favouriteTies, setFavouriteTie] = useState<ITie[]>(
    saved ? JSON.parse(saved) : []
  );

  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(popupRef, () => setOpenPopup(!openPopup), openPopup);

  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  const tiesStore = useSelector((state: ITiesReducer) => state.tiesReducer);
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode, isNightMode } = interfaceSettings;
  const { tieLoadingStatus, ties } = tiesStore;

  const buyTieStore = useSelector(
    (state: IBuyTieReducer) => state.buyTieReducer
  );
  const { buyTieLoadingStatus } = buyTieStore;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const listLang = tieMarketLang.find((c) => c.lang === lang)!;
  const dispatch = useDispatch();

  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  useEffect(() => {
    dispatch(dispatch(buyTieFetching()));
  }, []);

  const buyTie = async (
    formData: Pick<IOrder, "image" | "price" | "sellerId">
  ) => {
    try {
      dispatch(buyTieFetching());
      if (!user._id) {
        setOpenPopup(!openPopup);
      } else {
        const body = {
          ...formData,
          userId: user._id,
        };
        const resp = await createOrder(body);
        if (resp.userId) {
          dispatch(buyTieFetched(resp));
        } else {
          dispatch(buyTieFetchingError());
        }
        getTieList();
      }
    } catch (e) {
      dispatch(buyTieFetchingError());
    }
  };

  const getTieList = async () => {
    try {
      const login = localStorage.getItem("login");
      const user = login ? JSON.parse(login) : [];
      dispatch(tieFetching());
      if (user.user.role === "USER" && user.user._id) {
        const ties = await getAnotherTiesForUser(user.user._id);
        dispatch(tieFetched(ties));
      } else {
        const ties = await getTies();
        dispatch(tieFetched(ties));
      }
    } catch {
      dispatch(tieFetchingError());
    }
  };

  useEffect(() => {
    getTieList();
  }, []);

  const addFavouriteTie = (tie: ITie): void => {
    const favourite = favouriteTies.filter(
      (favouriteTie: ITie) => favouriteTie._id === tie._id
    );
    if (favourite.length > 0) {
      setFavouriteTie(
        favouriteTies.filter(
          (favouriteTie: ITie) => favouriteTie._id !== tie._id
        )
      );
    } else {
      setFavouriteTie([...favouriteTies, tie]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favouriteTie", JSON.stringify(favouriteTies));
  }, [favouriteTies]);

  const spinner = tieLoadingStatus === "loading" ? <Spinner /> : null;

  return (
    <>
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
                  <h4 className="market-block__title">{listLang.data.title}</h4>
                </div>
                <div className="market-block__products">
                  {buyTieLoadingStatus === "error" && (
                    <div className="error-tooltip">
                      <i className="fa fa-warning" />
                      {listLang.data.errortooltip}
                    </div>
                  )}
                  {buyTieLoadingStatus === "loaded" && (
                    <div className="success-tooltip">
                      <i className="fa fa-info" />
                      {listLang.data.tooltip}{" "}
                      <Link to="/my-orders">{listLang.data.myorders}</Link>
                    </div>
                  )}
                  {spinner}
                  <div className="row__products">
                    {ties?.map((tie) => {
                      const isLike =
                        favouriteTies.filter(
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
                              {(!Object.keys(user).length ||
                                user.role === "USER") && (
                                <>
                                  <Hover>
                                    <button
                                      className="tie__products_btn"
                                      onClick={() =>
                                        buyTie({
                                          image: tie.image,
                                          price: tie.price,
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
                                    onClick={() => addFavouriteTie(tie)}
                                  >
                                    <i className="fa fa-heart" />
                                    {isLike
                                      ? listLang.data.favourited
                                      : listLang.data.favourite}
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {ties?.length === 0 && <p>{listLang.data.empty}</p>}
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
    </>
  );
};
export default TieMarket;
