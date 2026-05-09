import React from 'react'

const Button = ({className , Text}) => {
  return (
    <div>
    <button className={`cursor-pointer bg-c1 text-c2 font-pop font-medium text-base border border-transparent px-12 py-4 rounded  hover:bg-transparent hover:text-c1 hover:border-c1 duration-400 ${className}`}>{Text}</button>
    </div>
  )
}

export default Button
