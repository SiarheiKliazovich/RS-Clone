import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  myOrdersFetching,
  myOrdersFetched,
  myOrdersFetchingError,
} from "../../actions";
import tieMarketLang from "../../data/tieMarket";
import { ILangReducer } from "../../interfaces/langReducer";
import { lightTheme, nightTheme } from "../../data/constants";
import { IStore } from "../../interfaces/store";
import { IAuthReducer } from "../../interfaces/authReducer";
import { getOrdersByUserId } from "../../services/apiOrders";
import Spinner from "../Spinner";
import { IMyOrdersReducer } from "../../interfaces/myOrdersReducer";
import ErrorMessage from "../ErrorMessage";
import MyOrdersList from "./MyOrdersList";

import "./myOrders.scss";

const MyOrders: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = interfaceSettings;
  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const list = tieMarketLang.find((c) => c.lang === lang)!;

  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const myOrdersStore = useSelector(
    (state: IMyOrdersReducer) => state.myOrdersReducer
  );
  const { ordersLoadingStatus, orders } = myOrdersStore;

  const dispatch = useDispatch();

  const getOrders = async (): Promise<void> => {
    try {
      dispatch(myOrdersFetching());
      const orders = await getOrdersByUserId(user._id);
      dispatch(myOrdersFetched(orders));
    } catch {
      dispatch(myOrdersFetchingError());
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const spinner = ordersLoadingStatus === "loading" ? <Spinner /> : null;

  return (
    <div className="tiemarket-wrapper">
      <div
        className="tiemarket__banner-wrapper"
        style={{
          backgroundColor: isNightMode
            ? nightTheme.background.page
            : lightTheme.background.page,
        }}
      >
        <div className="container">
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
                {list.data.myorders}
              </h4>
            </div>
            {spinner}
            {ordersLoadingStatus === "idle" ? (
              <MyOrdersList orders={orders} />
            ) : null}
            {ordersLoadingStatus === "error" ? <ErrorMessage /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
