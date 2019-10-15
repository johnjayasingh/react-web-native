import { takeEvery } from "redux-saga/effects";
import { INCREMENT } from "../constants/actions";

function* sayHello() {
  console.log("Hello Sagas!");
}

export function* helloSaga() {
  yield takeEvery(INCREMENT, sayHello);
}
