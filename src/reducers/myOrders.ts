import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";

import { IOrdersList } from "../interfaces/ordersList";

const initialState: IOrdersList = {
  orders: [],
  ordersLoadingStatus: "idle",
};

export const myOrdersReducer = (
  state: IOrdersList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.myOrdersFetching:
      return {
        ordersLoadingStatus: "loading",
      };
    case ActionTypes.myOrdersFetched:
      return {
        orders: action.payload,
        ordersLoadingStatus: "idle",
      };
    case ActionTypes.myOrdersFetchingError:
      return {
        ordersLoadingStatus: "error",
      };
    case ActionTypes.myOrderDeleted:
      return {
        orders: state.orders.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
