import "./index.scss";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import CircularProgress from "./CircularProgress";
import Graph from "./Graph";
import { specialColors } from "../../../data/constants";
import { IStore } from "../../../interfaces/store";
import { getOrders, getUsers } from "../../../services/apiDashboard";
import { IOrder } from "../../../interfaces/order";
import moment from "moment";
import { useTranslation } from "react-i18next";
import {
  ordersFetched,
  ordersFetching,
  ordersFetchingError,
} from "../../../actions";
import ErrorMessage from "../../ErrorMessage";
import Spinner from "../../Spinner";

const Index: FunctionComponent = () => {
  const { t } = useTranslation("dataLang");

  const state = useSelector((state: IStore) => state);
  const loadingStatus = state.ordersReducer.ordersLoadingStatus;

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [sellers, setSellers] = useState([]);

  const dispatch = useDispatch();

  const getOrdersList = async () => {
    try {
      dispatch(ordersFetching());
      const orders = await getOrders();
      dispatch(ordersFetched(orders));
      setOrders(orders);
    } catch {
      dispatch(ordersFetchingError());
    }
  };

  useEffect(() => {
    getOrdersList()
      .then(() => {
        getUsers({ role: "USER" })
          .then((users) => setUsers(users))
          .catch(() => setUsers([]));
      })
      .then(() => {
        getUsers({ role: "SELLER" })
          .then((sellers) => setSellers(sellers))
          .catch(() => setSellers([]));
      });
  }, []);

  const getTotalRevenue = () => {
    const result = orders.reduce((res, order: IOrder) => {
      return order.status === "FINISHED" ? res + order.price : res;
    }, 0 as number);

    return `$${result}`;
  };

  const getTodaySales = () => {
    return orders.filter(
      (order: IOrder) =>
        order.status === "FINISHED" && moment().isSame(order.date, "day")
    ).length;
  };

  const getTodaySalesRevenue = () => {
    return orders.reduce((res, order: IOrder) => {
      return order.status === "FINISHED" &&
        moment(order.date).isSame(moment(), "day")
        ? res + order.price
        : res;
    }, 0 as number);
  };

  const getOrdersRatio = () => {
    const current = orders.reduce((res, order: IOrder) => {
      return order.status === "FINISHED" &&
        moment(order.date).isSame(moment(), "month")
        ? res + order.price
        : res;
    }, 0 as number);

    const prev = orders.reduce((res, order: IOrder) => {
      return order.status === "FINISHED" &&
        moment(order.date).isSame(moment().subtract(1, "month"), "month")
        ? res + order.price
        : res;
    }, 0 as number);

    return { current: current, prev: prev };
  };

  return (
    <>
      {loadingStatus === "loading" ? (
        <div className="dashboard__spinner">
          <Spinner />
        </div>
      ) : loadingStatus === "error" ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className="dashboard__header">{t("dashboard.headers.index")}</h1>
          <div className="index">
            <div className="index__cards">
              <Card
                colors={specialColors.red}
                icon={"like"}
                value={getTotalRevenue()}
                title={t("index.cards.totalRevenue")}
              />
              <Card
                colors={specialColors.aqua}
                icon={"cart"}
                value={getTodaySales()}
                title={t("index.cards.todaySales")}
              />
              <Card
                colors={specialColors.blue}
                icon={"chart"}
                value={sellers.length}
                title={t("index.cards.sellersCount")}
              />
              <Card
                colors={specialColors.orange}
                icon={"view"}
                value={users.length}
                title={t("index.cards.usersCount")}
              />
            </div>
            <div className="index__additional">
              <CircularProgress
                monthRevenue={getOrdersRatio()}
                todaySales={getTodaySalesRevenue()}
              />
              <Graph
                isNightMode={state.appInterface.isNightMode}
                orders={orders}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
