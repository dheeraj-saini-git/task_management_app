import React from 'react'
import { forwardRef } from 'react'

const Input = forwardRef(({label, textarea, ...props},ref) => {
    
  const cssClass = 'w-full p-1 text-stone-600 rounded-sm border-b-2 border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600'
  return (
    <p className='flex flex-col gap-1 my-4'>
        <label className='text-sm font-bold text-stone-500 uppercase'>{label}</label>
        {textarea? <textarea ref={ref} className={cssClass} {...props} /> : <input ref={ref} className={cssClass} {...props}/>}
    </p>
  )
})

export default Input
