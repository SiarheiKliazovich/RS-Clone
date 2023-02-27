import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";

import { ITiesList } from "../interfaces/tie";

const initialState: ITiesList = {
  ties: [],
  tieLoadingStatus: "idle",
};

export const myTiesReducer = (
  state: ITiesList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.myTiesFetching:
      return {
        tieLoadingStatus: "loading",
      };
    case ActionTypes.myTiesFetched:
      return {
        ties: action.payload,
        tieLoadingStatus: "idle",
      };
    case ActionTypes.myTiesFetchingError:
      return {
        tieLoadingStatus: "error",
      };
    case ActionTypes.myTieDeleted:
      return {
        ties: state.ties.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
