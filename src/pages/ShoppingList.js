import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Login } from '../components/Login'
import { Test } from '../components/Test'

export const ShoppingList = () => {
  const accessToken = useSelector(store => store.user.login.accessToken)

  return(
    <ShoppingSection>
      {!accessToken && <Login />}
      <Heading>Shopping List</Heading>
      {accessToken && <Test />}
    </ShoppingSection>
  )
}

const ShoppingSection = styled.section`
  display: flex;
  flex-direction: column;
`
const Heading = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-left: -20px;
`