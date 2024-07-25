import { configureStore, combineReducers} from "@reduxjs/toolkit";
import todoReducer from "../feature/Todo/todoSlice";

const rootReducer = combineReducers({
    todos : todoReducer,
})


const store = configureStore({
    reducer : rootReducer,
})

export default store; 