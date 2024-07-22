import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/Todo/todoSlice' 
import { MdDelete } from "react-icons/md";

const Todos = () => {
    const todos = useSelector( (state)=> state.todos)
    const dispatch = useDispatch();
    
    return (
        <div className=' h-full w-full flex flex-col items-center gap-2'>
        <h1 className='text-2xl uppercase text-indigo-400 font-mono underline'>todos</h1>
        
        <div className='flex flex-col gap-1 h-full w-full p-4 '>
            {
                todos.map((todo)=>{
                    return (
                        <div key={todo.id} className='border-2 bg-slate-100 py-[3px] rounded-md flex justify-evenly h-fit w-full'>
                            <p className='h-fit w-1/3 text-'>{todo.text}</p>
                            <button 
                            className='border-2 border-white text-center h-full w-fit px-2 bg-indigo-500 rounded-lg'
                            onClick={()=> dispatch(removeTodo(todo.id))}>
                                <MdDelete color='white'  />
                            </button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Todos
