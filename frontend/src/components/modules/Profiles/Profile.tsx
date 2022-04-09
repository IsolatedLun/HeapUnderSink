import React from 'react'
import { API_URL } from '../../../consts'
import { INF_Profile } from './types'

const Profile = ({ profile } : { profile: INF_Profile }) => {
    if(!profile.variant)
        profile.variant = 'beveled';

  return (
    <img className="[ profile ]" 
        src={API_URL + profile.url} 
        data-profile-variant={profile.variant}
        alt={profile.alt} />
  )
}

export default Profile