import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import countReducer from "./features/Counter/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: countReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
