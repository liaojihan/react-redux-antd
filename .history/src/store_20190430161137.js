import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const initialState = {}
const middleware = [thunk]

const store = createStore(
    () => [],
    
)

export default store