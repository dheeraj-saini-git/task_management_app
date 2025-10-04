import React, {useState} from 'react'

const NewTask = ({onAdd}) => {
  const [task, SetTask] = useState('Add a task...')

  function handleChange(e){
    SetTask(e.target.value)
  }
  function handleClick(){
    onAdd(task)
    SetTask('')
  }
  return (
    <div className='flex items-center gap-4'>
      <input type="text" className='w-64 px-2 py-2 rounded-sm bg-stone-200' value={task} onChange={handleChange}/>
      <button onClick={()=> handleClick()} className='text-stone-700 hover:text-stone-950'>Add Task</button>
    </div>
  )
}

export default NewTask
