import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todos : [{id :1 , text : "ankit" } , {id:2, text : "satyal"}],
// }

const todoSlice = createSlice( { 
    name : "todos",
    initialState :  [{id :1 , text : "ankit" } , {id:2, text : "satyal"}, {id:3, text:"ankksd"},{id:4,text:"alsjkfd"}],
    reducers :{
        addTodo :( state, action )=>{
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
            const newState = state.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.text = action.payload.text;
                }
            })

            return newState;
        },
    }
});


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer ;