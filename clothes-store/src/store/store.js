import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import {rootReducer} from "./root-reducer";
import {logger} from "redux-logger/src";


const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares))
export const store = createStore(rootReducer, undefined, composedEnhancers);