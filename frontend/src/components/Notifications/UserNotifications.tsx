import React from 'react'
import { PROFILE_ICON } from '../../consts'
import { useAuth } from '../../hooks/useAuth'
import DropDownContainer from '../Modules/Dropdowns/DropDownContainer'
import DropDownItem from '../Modules/Dropdowns/DropDownItem'
import Notification from './Notification'

const UserNotifications = () => {
    const [user] = useAuth();

  return (
    <div className='[ notifications ] [ pos-relative ]' data-notifications='0'>
        <DropDownContainer item={<p className='[ fa ]'>{ `\uf0f3` }</p>} alignment='navbar'>
            <DropDownItem>
              
            </DropDownItem>
        </DropDownContainer>
    </div>
  )
}

export default UserNotifications