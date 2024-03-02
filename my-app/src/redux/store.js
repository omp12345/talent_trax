import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
 import {thunk} from "redux-thunk";

import { reducer as planetReducer } from "./planet/reducer";
import { reducer as shapeReducer } from "./shapes/reducer";
import { reducer as colorReducer } from "./color/reducer";
import { reducer as sizeReducer } from "./size/reducer";



const rootReducer = combineReducers({
    planetReducer,
    shapeReducer,
    colorReducer,
    sizeReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
