import React from 'react'
import { CARET_DOWN_ICON } from '../../../consts'
import Profile from '../../Modules/Profiles/Profile'

const NavUser = () => {
  return (
    <div className='[ flex flex-align-center flex-items ]'>
        <Profile profile={{ url: '/media/profiles/def.png', alt: '' }} />
        <i className='fa'>{ CARET_DOWN_ICON }</i>
    </div>
  )
}

export default NavUser