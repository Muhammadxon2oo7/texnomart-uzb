import { combineReducers } from "redux";
import { cardReducer, productReducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    card:cardReducer
})