import React from 'react'

const DropDown = (props: any) => {
  return (
    <div className="[ dropdown flex-col flex-items ]">
        { props.children }
    </div>
  )
}

export default DropDown;