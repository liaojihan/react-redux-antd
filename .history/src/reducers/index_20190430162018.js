import { combineReducers } from "redux";
import menuReducer from "./menuReducer"

// 继承所有reducer
const rootReducers = combineReducers({
    menu: menuReducer
})

export default rootReducers