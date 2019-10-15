import { combineReducers } from "redux";

import TempDefaults from "./TempDefaults";
import CryptoCurrencies from "./CryptoCurrencies";
import transactions from "./transactions";

import counter from "./counter";

export default combineReducers({
  counter
});
