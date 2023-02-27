import { combineReducers } from "redux";
import { appInterface } from "./appInterface";
import { auth } from "./auth";
import { usersReducer } from "./users";
import { ordersReducer } from "./orders";
import { tiesReducer } from "./ties";
import { addTieReducer } from "./addTie";
import { langReducer } from "./lang";
import { buyTieReducer } from "./buyTie";
import { favouriteTieReducer } from "./favouriteTie";
import { myTiesReducer } from "./myTies";
import { myOrdersReducer } from "./myOrders";

const rootReducer = combineReducers({
  appInterface,
  auth,
  usersReducer,
  ordersReducer,
  tiesReducer,
  addTieReducer,
  langReducer,
  buyTieReducer,
  myTiesReducer,
  myOrdersReducer,
  favouriteTieReducer,
});

export default rootReducer;
