import React from 'react'
import { CALENDAR_ICON } from '../../consts'
import { INF_User } from '../../features/types'
import AboutList, { AboutListItem } from '../Modules/Lists/AboutList'

const MeAbout = (props: INF_User) => {
  console.log(props)
  return (
    <div className='[ me-about ] [ width-100 ]'>
        <h2 className='[ bottom-border ] [ fs-500 ]' data-border-variant='heading' 
            data-border-show>
            About
        </h2>

        <AboutList>
          <AboutListItem icon={CALENDAR_ICON} text='Joined at'>
            { props.joined_at }
          </AboutListItem>
          <AboutListItem icon={`\uf1ec`} text='Questions asked'>
            { props.questions.length }
          </AboutListItem>
        </AboutList>
    </div>
  )
}

export default MeAbout