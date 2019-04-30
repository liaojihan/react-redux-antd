import { combineReducers } from "redux";
import menuReducer from "./menuReducer"

// 
const rootReducers = combineReducers({
    menu: menuReducer
})

export default rootReducers