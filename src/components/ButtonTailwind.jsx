import React from 'react'

const ButtonTailwind = ({children, ...props}) => {
  return (
    <button className='px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-500 hover:text-red-500 hover:bg-stone-200' {...props}>{children}</button>
  )
}

export default ButtonTailwind