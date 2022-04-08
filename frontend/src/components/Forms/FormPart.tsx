import React from 'react'

const FormPart = ({ children } : { children: any }) => {
  return (
    <div className="[ form__part ] [ flex flex-col gap-05 ]">
        { children }
    </div>
  )
}

export default FormPart; 