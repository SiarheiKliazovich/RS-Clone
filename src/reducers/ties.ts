import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";

import { ITiesList } from "../interfaces/tie";

const initialState: ITiesList = {
  ties: [],
  tieLoadingStatus: "load",
};

export const tiesReducer = (
  state: ITiesList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.tieFetching:
      return {
        tieLoadingStatus: "loading",
      };
    case ActionTypes.tieFetched:
      return {
        ties: action.payload,
        tieLoadingStatus: "loaded",
      };
    case ActionTypes.tieFetchingError:
      return {
        tieLoadingStatus: "error",
      };
    case ActionTypes.tieDeleted:
      return {
        ties: state.ties.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
