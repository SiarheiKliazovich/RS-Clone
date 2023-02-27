import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";

import { IAddTie, IAddTieList } from "../interfaces/addTie";

const initialState: IAddTieList = {
  addTie: {} as IAddTie,
  addTieLoadingStatus: "load",
};

export const addTieReducer = (
  state: IAddTieList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.addTieFetching:
      return {
        addTieLoadingStatus: "loading",
      };
    case ActionTypes.addTieFetched:
      return {
        addTie: action.payload,
        addTieLoadingStatus: "loaded",
      };
    case ActionTypes.addTieFetchingError:
      return {
        addTieLoadingStatus: "error",
      };
    default:
      return state;
  }
};
