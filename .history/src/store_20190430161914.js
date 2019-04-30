import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { } from "./reducers"

const initialState = {}
const middleware = [thunk]

const store = createStore(
    () => [],
    initialState,
    applyMiddleware(...middleware)
)

export default store