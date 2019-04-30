import { combineReducers } from "redux";
import menuReducer from "./menuReducer"

const rootReducers = combineReducers({
    menu: menu
})

export default rootReducers