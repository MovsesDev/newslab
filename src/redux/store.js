import thunk from "redux-thunk";
import categoriesReducer from "./categoriesReducer";
import catReducer from "./catReducer";
const { createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
    cat: catReducer,
    categories: categoriesReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store