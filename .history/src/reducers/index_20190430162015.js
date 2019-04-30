import { combineReducers } from "redux";
import menuReducer from "./menuReducer"

// 继承所有
const rootReducers = combineReducers({
    menu: menuReducer
})

export default rootReducers