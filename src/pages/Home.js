import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Login } from '../components/Login'
import { ShoppingList } from '../components/ShoppingList'
import { Logout } from '../components/Logout'

export const Home = () => {
  const accessToken = useSelector(store => store.user.login.accessToken)

  return(
    <ShoppingSection>
      {!accessToken && <><Heading>Log in to create your shopping list </Heading></>}
      <Login /> 
      <LoggedInHeader>
      {accessToken && <Heading>Shopping List</Heading>}
      <Logout />
      </LoggedInHeader>

      <ShoppingList />
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
  margin: 20px;
`
const LoggedInHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;  
`