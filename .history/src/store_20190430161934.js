import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducers from "./reducers/index"

const initialState = {}
const middleware = [thunk]

const store = createStore(
    () => [],
    initialState,
    applyMiddleware(...middleware)
)

export default store