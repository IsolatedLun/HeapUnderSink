import React from 'react'
import LinkButton from '../../Modules/Buttons/LinkButton'

const AuthNavButtons = ({ isDesktop } : { isDesktop: boolean }) => {
    const rest = isDesktop ? { 'data-desktop': true } : { 'data-mobile': true }

    return (
    <div className={isDesktop ? '[ flex-items ]' : '[ flex-items flex-col flex-align-center ]'}>
        <LinkButton props={{ to: '/auth/login', rest }}>
            Log in
        </LinkButton>
        <LinkButton props={{ to: '/auth/signup', variant: 'action', rest}}>
            Sign up
        </LinkButton>
    </div>
    )
}

export default AuthNavButtons