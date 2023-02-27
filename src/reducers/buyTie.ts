import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";

import { IBuyTieList, IBuyTie } from "../interfaces/buyTie";

const initialState: IBuyTieList = {
  buyTie: {} as IBuyTie,
  buyTieLoadingStatus: "load",
};

export const buyTieReducer = (
  state: IBuyTieList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.buyTieFetching:
      return {
        buyTieLoadingStatus: "loading",
      };
    case ActionTypes.buyTieFetched:
      return {
        addTie: action.payload,
        buyTieLoadingStatus: "loaded",
      };
    case ActionTypes.buyTieFetchingError:
      return {
        buyTieLoadingStatus: "error",
      };
    default:
      return state;
  }
};
