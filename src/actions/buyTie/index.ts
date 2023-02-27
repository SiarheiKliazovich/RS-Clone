import { IOrder } from "../../interfaces/order";
import { ActionTypes } from "../../interfaces/store";

export const buyTieFetching = () => {
  return {
    type: ActionTypes.buyTieFetching,
  };
};

export const buyTieFetched = (order: IOrder) => {
  return {
    type: ActionTypes.buyTieFetched,
    payload: order,
  };
};

export const buyTieFetchingError = () => {
  return {
    type: ActionTypes.buyTieFetchingError,
  };
};
