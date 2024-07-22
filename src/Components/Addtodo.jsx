import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../feature/Todo/todoSlice'

const Addtodo = () => {
  const [input, setInput ] = useState("");
  const dispatch  = useDispatch()


  function handleSubmit(e){
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("")

  }
  return (
    <form action="#" onSubmit={handleSubmit}
    className="h-14 w-full  text-center pt-2">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter todo'
        className=' mr-10 h-10 w-1/2 rounded-lg   p-2 border-2 focus:outline-indigo-500' />
        <button type='submit' 
        className='bg-indigo-500 h-10 w-20 rounded-xl text-white hover:bg-indigo-700'
        >Submit</button>
   
    </form>
  )
}

export default Addtodo
