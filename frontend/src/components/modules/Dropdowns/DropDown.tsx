import React from 'react'

const DropDown = (props: any) => {
  return (
    <div className="[ dropdown ] [ flex-col gap-025 pos-absolute overflow-hidden ]">
        { props.children }
    </div>
  )
}

export default DropDown;