import React from 'react'

const Button = ({children, ...props}) => {
  const cssClass = 'py-2 px-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-50 hover:bg-stone-800'

  return (
     <button {...props} className={cssClass}>{children}</button>
  )
}

export default Button
