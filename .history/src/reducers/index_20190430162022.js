import { combineReducers } from "redux";
import menuReducer from "./menuReducer"

// 集成所有reducer
const rootReducers = combineReducers({
    menu: menuReducer
})

export default rootReducers