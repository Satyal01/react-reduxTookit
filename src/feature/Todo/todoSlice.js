import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";


// const initialState = {
//     todos : [{id :1 , text : "ankit" } , {id:2, text : "satyal"}],
// }

const todoSlice = createSlice( { 
    name : "todos",
    initialState :  [{id:nanoid(), text: "first note"}],
    reducers :{
        addTodo :( state, action )=>{
            console.log("addTodod  ", state);
            const todo  = {
                id : nanoid(),
                text : action.payload
            }
             
            state.push(todo);
        },
        removeTodo:(state, action)=>{
            const  newState = state.filter((todo)=> todo.id !== action.payload);
            return newState;
        },
        updateTodo:(state, action )=>{
            const {id, text } = action.payload;
            state.map((todo)=>{
                if(todo.id === id ) todo.text = text; 
            })

        },
    }
});


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer ;