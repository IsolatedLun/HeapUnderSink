import React from 'react'

const Form = ({ children, onSubmit, variant } : { children: any, onSubmit: Function, variant?: string }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
      className='[ form flex flex-col gap-05 padding-block-1 margin-top-1 ]' data-variant={variant}>
      { children }
    </form>
  )
}

export default Form;