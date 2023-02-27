import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";

import { IUsersList } from "../interfaces/usersList";

const initialState: IUsersList = {
  users: [],
  usersLoadingStatus: "idle",
};

export const usersReducer = (
  state: IUsersList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.usersFetching:
      return {
        usersLoadingStatus: "loading",
      };
    case ActionTypes.usersFetched:
      return {
        users: action.payload,
        usersLoadingStatus: "idle",
      };
    case ActionTypes.usersFetchingError:
      return {
        usersLoadingStatus: "error",
      };
    case ActionTypes.userDeleted:
      return {
        users: state.users.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
