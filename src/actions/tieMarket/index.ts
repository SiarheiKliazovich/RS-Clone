import { ITie } from "../../../src/interfaces/tie";
import { ActionTypes } from "../../interfaces/store";

export const tieFetching = () => {
  return {
    type: ActionTypes.tieFetching,
  };
};

export const tieFetched = (ties: ITie[]) => {
  return {
    type: ActionTypes.tieFetched,
    payload: ties,
  };
};

export const tieFetchingError = () => {
  return {
    type: ActionTypes.tieFetchingError,
  };
};

export const tieDeleted = (id: string) => {
  return {
    type: ActionTypes.tieDeleted,
    payload: id,
  };
};
