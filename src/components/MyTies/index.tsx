import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  myTiesFetching,
  myTiesFetched,
  myTiesFetchingError,
  myOrdersFetching,
  myOrdersFetched,
  myOrdersFetchingError,
} from "../../actions";
import { lightTheme, nightTheme } from "../../data/constants";
import { IStore } from "../../interfaces/store";
import useOnClickOutside from "../../hook/useOnClickOutside";
import { IAuthReducer } from "../../interfaces/authReducer";
import { getTiesByUserId } from "../../services/apiTies";
import { getOrdersBySellerId } from "../../services/apiOrders";
import Spinner from "../Spinner";
import { IMyTiesReducer } from "../../interfaces/myTiesReducer";
import { IMyOrdersReducer } from "../../interfaces/myOrdersReducer";
import ErrorMessage from "../ErrorMessage";
import MyTiesList from "./MyTiesList";
import MyTiesOrdersList from "./MyTiesOrdersList";
import Hover from "../Hover";
import Active from "../Active";

import "./myTies.scss";
import classNames from "classnames";

const MyTies: FunctionComponent = () => {
  const [activeButton, setActiveButton] = useState<string>("1");

  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const [open, setOpen] = useState(false);
  const { isNightMode } = interfaceSettings;
  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;
  const myTiesStore = useSelector(
    (state: IMyTiesReducer) => state.myTiesReducer
  );
  const { tieLoadingStatus, ties } = myTiesStore;

  const myOrdersStore = useSelector(
    (state: IMyOrdersReducer) => state.myOrdersReducer
  );
  const { ordersLoadingStatus, orders } = myOrdersStore;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(!open), open);

  const { t } = useTranslation("dataLang");

  const dispatch = useDispatch();

  const getDataList = async (numberButton: string): Promise<void> => {
    try {
      if (numberButton === "1") {
        dispatch(myTiesFetching());
        const ties = await getTiesByUserId(user._id);
        dispatch(myTiesFetched(ties));
      } else {
        dispatch(myOrdersFetching());
        const orders = await getOrdersBySellerId(user._id);
        dispatch(myOrdersFetched(orders));
      }
    } catch {
      if (numberButton === "1") {
        dispatch(myTiesFetchingError());
      } else {
        dispatch(myOrdersFetchingError());
      }
    }
  };

  useEffect(() => {
    getDataList("1");
  }, []);

  const toggleHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const id = e.currentTarget.dataset.id;
    if (typeof id === "string") {
      setActiveButton(id);
    }
  };

  const spinner =
    tieLoadingStatus === "loading" || ordersLoadingStatus === "loading" ? (
      <Spinner />
    ) : null;

  return (
    <div className="tiemarket-wrapper">
      <div
        className="my-ties__wrapper"
        style={{
          backgroundColor: isNightMode
            ? nightTheme.background.page
            : lightTheme.background.page,
        }}
      >
        <div className="container">
          <div className="market-block" style={{ backgroundColor }}>
            <div className="my-ties__header">
              <Hover>
                <Active
                  classN={`users__header-button ${
                    activeButton == "1" ? "users__header-button_active" : ""
                  }`}
                >
                  <button
                    className={classNames("users__header-button", {
                      "users__header-button_active": activeButton === "1",
                    })}
                    data-id="1"
                    onClick={(e) => {
                      toggleHandler(e);
                      // eslint-disable-next-line
                    getDataList(e.currentTarget.dataset.id!);
                    }}
                  >
                    {t("myTies.myTies")}
                  </button>
                </Active>
              </Hover>
              <Hover>
                <Active
                  classN={`users__header-button ${
                    activeButton == "2" ? "users__header-button_active" : ""
                  }`}
                >
                  <button
                    className={classNames("users__header-button", {
                      "users__header-button_active": activeButton === "2",
                    })}
                    data-id="2"
                    onClick={(e) => {
                      toggleHandler(e);
                      // eslint-disable-next-line
                getDataList(e.currentTarget.dataset.id!);
                    }}
                  >
                    {t("myTies.mySales")}
                  </button>
                </Active>
              </Hover>
            </div>
            {spinner}
            {tieLoadingStatus === "idle" && activeButton === "1" ? (
              <MyTiesList ties={ties} />
            ) : null}
            {tieLoadingStatus === "error" && activeButton === "1" ? (
              <ErrorMessage />
            ) : null}
            {ordersLoadingStatus === "idle" && activeButton === "2" ? (
              <MyTiesOrdersList orders={orders} />
            ) : null}
            {ordersLoadingStatus === "error" && activeButton === "2" ? (
              <ErrorMessage />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTies;
