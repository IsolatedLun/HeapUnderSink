import React from 'react'
import { useAppDispatch } from '../../../../hooks'
import { loggedOutAction } from '../../../features/user-slice';
import Button from './Button'

const LogOutButton = () => {
    const dispatch = useAppDispatch();

  return (
    <Button onClick={() => dispatch(loggedOutAction())} variant='red'>Log out</Button>
  )
}

export default LogOutButton