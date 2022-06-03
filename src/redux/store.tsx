import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import middleWares from "./middlewares";

const middleWaresToApply = [thunk, ...middleWares];

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(...middleWaresToApply),
          // @ts-ignore
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(...middleWaresToApply)
  );

  return store;
}

export const store = configureStore;
