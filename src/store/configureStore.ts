/* eslint-disable @typescript-eslint/ban-ts-comment */
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import loggerMiddleware from "./logger";
import rootReducer from "../reducers";

const configureStore = () => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middlewareEnhancer);

  // @ts-ignore:next-line
  if (process.env.NODE_ENV !== "production" && module.hot) {
    // @ts-ignore:next-line
    module.hot.accept("./../reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default configureStore;
