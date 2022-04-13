import React from 'react'
import LinkButton from '../../Modules/Buttons/LinkButton'

const AuthNavButtons = ({ isDesktop } : { isDesktop: boolean }) => {
    const rest = isDesktop ? { 'data-desktop': true } : { 'data-mobile': true };

    return (
    <div { ...rest } 
        className={isDesktop ? '[ flex-items ]' : '[ flex-items flex-col flex-align-center ]'}>
        <LinkButton  to='/auth/login'>
            Log in
        </LinkButton>
        <LinkButton to='/auth/signup' variant='action'>
            Sign up
        </LinkButton>
    </div>
    )
}

export default AuthNavButtons