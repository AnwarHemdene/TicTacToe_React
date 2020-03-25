import { createStore, applyMiddleware } from "redux";
import homeReducer from "./home/reducer";
import homeMiddleware from "./home/middleware";

const middlewares = applyMiddleware(homeMiddleware);

const store = createStore(homeReducer, middlewares);

export default store;
