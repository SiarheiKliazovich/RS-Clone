import { ActionTypes } from "../../interfaces/store";
import { ITie } from "../../interfaces/tie";

export const addTieFetching = () => {
  return {
    type: ActionTypes.addTieFetching,
  };
};

export const addTieFetched = (tie: ITie) => {
  return {
    type: ActionTypes.addTieFetched,
    payload: tie,
  };
};

export const addTieFetchingError = () => {
  return {
    type: ActionTypes.addTieFetchingError,
  };
};
