import { IOrder } from "../../interfaces/order";
import { ActionTypes } from "../../interfaces/store";

export const favouriteTieFetching = () => {
  return {
    type: ActionTypes.favouriteTieFetching,
  };
};

export const favouriteTieFetched = (order: IOrder) => {
  return {
    type: ActionTypes.favouriteTieFetched,
    payload: order,
  };
};

export const favouriteTieFetchingError = () => {
  return {
    type: ActionTypes.favouriteTieFetchingError,
  };
};
