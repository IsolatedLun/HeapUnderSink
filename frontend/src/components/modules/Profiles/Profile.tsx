import React from 'react'
import { API_URL } from '../../../consts'
import { INF_Profile } from './types'

const Profile = (props: INF_Profile) => {

  return (
    <img className="[ profile ]" 
        src={API_URL + props.url} 
        data-profile-variant={props.variant}
        data-variant={props.variant}
        data-size={props.size}
        alt={props.alt} />
  )
}

export default Profile