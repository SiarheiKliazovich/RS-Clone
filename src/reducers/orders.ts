import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";

import { IOrdersList } from "../interfaces/ordersList";

const initialState: IOrdersList = {
  orders: [],
  ordersLoadingStatus: "idle",
};

export const ordersReducer = (
  state: IOrdersList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.ordersFetching:
      return {
        ordersLoadingStatus: "loading",
      };
    case ActionTypes.ordersFetched:
      return {
        orders: action.payload,
        ordersLoadingStatus: "idle",
      };
    case ActionTypes.ordersFetchingError:
      return {
        ordersLoadingStatus: "error",
      };
    case ActionTypes.orderDeleted:
      return {
        orders: state.orders.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
