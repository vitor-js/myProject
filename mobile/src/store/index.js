import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSagas from "./modules/rootSagas";

const sagaMiddleware = createSagaMiddleWare();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSagas);
export default store;
