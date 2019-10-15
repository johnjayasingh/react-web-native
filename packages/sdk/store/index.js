import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import initialState from "../constants/state";
import { initSagas } from "./initSagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

initSagas(sagaMiddleware);

export default store;
