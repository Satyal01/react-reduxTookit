import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/Todo/todoSlice' 
import { MdEdit } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Todos = () => {
    const [UpdatedInput, setUpdatedInput] = useState({id:"",text:""});
    const [updateVisible , setUpdateVisible] = useState(false);

    const todos = useSelector( (state)=> state.todos)
    const dispatch = useDispatch();
    const card = useSelector( (state) => state.card);
   
    function handleDoneUpdate(){
        dispatch(updateTodo(UpdatedInput))
        setUpdateVisible(false);
    }

    function handleUpdate(id, text){
        setUpdateVisible(true);
        setUpdatedInput(
            {id:id, text: text}
        );
    }


    return (
        <div className=' h-full w-full flex flex-col items-center gap-2'>
        <h1 className='text-2xl uppercase text-indigo-400 font-mono underline'>todos</h1>
        
        <div className='flex flex-col gap-1 h-full w-full p-4 '>
            {
                todos.map((todo)=>{
                    return (
                        <div  key={todo.id} id={todo.id} className='border-2 bg-slate-100 py-[3px] rounded-md flex justify-between px-2 h-fit w-full'>
                            <p className='h-fit w-1/3 text-'>{todo.text}</p>
                            <div className='flex gap-4 items-center'>
                                <button onClick={()=>{
                                    handleUpdate(todo.id ,todo.text)
                                }}>
                                <MdEdit />
                                </button>
                                <button
                                onClick={()=> dispatch(removeTodo(todo.id))}>
                                    <MdDelete />
                                </button>
                            </div>
                            {
                                updateVisible &&
                            <div className='absolute top-0 left-0 h-screen w-screen z-10  backdrop-blur-sm grid place-items-center'>
                                <div className='relative bg-slate-100 h-20 w-1/4     flex justify-center items-center gap-5 rounded-xl shadow-md '>
                                    <button className='absolute top-1 right-1 '>
                                        <MdCancel size={20} color='red' onClick={()=>setUpdateVisible(false)}/>
                                    </button>
                                    <input type="text" value={UpdatedInput.text} onChange={(e) => setUpdatedInput({...UpdatedInput, text:e.target.value})}
                                    className='h-10 w-1/2 rounded-lg border-2 focus: outline-indigo-600 outline-2'
                                    />
                                    <button className='h-10 w-16 rounded-xl bg-indigo-500 hover:bg-indigo-600'
                                    onClick={handleDoneUpdate}
                                    >
                                        Done
                                    </button>

                                </div>
                            </div>
                            }
                        </div>

                    )
                })
            }
        </div>
    </div>
  )
}

export default Todos
