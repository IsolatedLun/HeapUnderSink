import React from 'react'
import { CARET_DOWN_ICON } from '../../../consts'
import { useAuth } from '../../../hooks/useAuth'
import Profile from '../../Modules/Profiles/Profile'

const NavUser = () => {
  const [user] = useAuth();

  return (
    <div className='[ flex flex-align-center flex-items ]'>
        <Profile url={user.profile} data-size='large' alt={`${user.username}'s profile`} />
        <p>{ user.username }</p>
        <i className='fa'>{ CARET_DOWN_ICON }</i>
    </div>
  )
}

export default NavUser