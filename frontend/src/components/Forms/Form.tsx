import React from 'react'

const Form = ({ children, onSubmit } : { children: any, onSubmit: Function }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
      className='[ form flex flex-col gap-05 padding-block-1 margin-top-1 ]'>
      { children }
    </form>
  )
}

export default Form;