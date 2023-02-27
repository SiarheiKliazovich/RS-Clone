import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getOrders } from "../../../services/apiOrders";
import {
  ordersFetching,
  ordersFetched,
  ordersFetchingError,
} from "../../../actions";
import { IStore } from "../../../interfaces/store";

import { IOrdersReducer } from "../../../interfaces/ordersReducer";
import { lightTheme, nightTheme } from "../../../data/constants";
import OrdersList from "./OrdersList";
import Spinner from "../../Spinner";
import ErrorMessage from "../../ErrorMessage";
import { useTranslation } from "react-i18next";

import "./orders.scss";

const Orders: FunctionComponent = () => {
  const ordersStore = useSelector(
    (state: IOrdersReducer) => state.ordersReducer
  );
  const { ordersLoadingStatus, orders } = ordersStore;
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const { t } = useTranslation("dataLang");

  const dispatch = useDispatch();

  const getOrdersList = async () => {
    try {
      dispatch(ordersFetching());
      const orders = await getOrders();
      dispatch(ordersFetched(orders));
    } catch {
      dispatch(ordersFetchingError());
    }
  };

  useEffect(() => {
    getOrdersList();
  }, []);

  return (
    <>
      {ordersLoadingStatus === "loading" ? (
        <div className="dashboard__spinner">
          <Spinner />
        </div>
      ) : ordersLoadingStatus === "error" ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className="dashboard__header">{t("dashboard.headers.orders")}</h1>
          <div className="orders__wrapper" style={{ backgroundColor }}>
            <OrdersList orders={orders} />
          </div>
        </>
      )}
    </>
  );
};

export default Orders;
