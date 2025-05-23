import React from 'react'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'

const App = () => {
  return (
    <div className='h-screen w-full grid  place-items-center  bg-slate-200'>
      <div className=' bg-white rounded-xl p-4 min-h-1/2  max-h-screen min-w-1/3 shadow-md shadow-gray-500 flex flex-col 
      justify-center items-center gap-4'>
        {/* add to */}
        <Addtodo />
        {/* previous todos  */}
        <Todos />
      </div>
    </div>
  )
}

export default App
