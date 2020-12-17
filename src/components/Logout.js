import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { user } from '../reducers/user'


export const Logout = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector(store => store.user.login.accessToken)

  const handleLogout = () => {
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    dispatch(user.actions.setUserId({ userId: 0 }))
   }

    return (
      <LogoutSection>
        {accessToken && <Button type='submit' onClick={handleLogout}>Log Out</Button>}
      </LogoutSection>

    )
}

const LogoutSection = styled.div`
  margin: 30px;  
`
const Button = styled.button`
  width: 70px;
  margin: 2px 0 2px 20px;
  border-radius: 10px;
  cursor: pointer;
`