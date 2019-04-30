import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducers from "./reducers/index"

const initialState = {}
const middleware = [thunk]

// 创建
const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(...middleware)
)

export default store