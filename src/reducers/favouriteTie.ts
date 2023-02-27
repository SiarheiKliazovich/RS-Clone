import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";

import { IFavouriteTieList, IFavouriteTie } from "../interfaces/favouriteTie";

const initialState: IFavouriteTieList = {
  favouriteTie: {} as IFavouriteTie,
  favouriteTieLoadingStatus: "load",
};

export const favouriteTieReducer = (
  state: IFavouriteTieList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.favouriteTieFetching:
      return {
        favouriteTieLoadingStatus: "loading",
      };
    case ActionTypes.favouriteTieFetched:
      return {
        addTie: action.payload,
        favouriteTieLoadingStatus: "loaded",
      };
    case ActionTypes.favouriteTieFetchingError:
      return {
        favouriteTieLoadingStatus: "error",
      };
    default:
      return state;
  }
};
