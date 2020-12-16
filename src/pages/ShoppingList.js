import React from 'react'
import styled from 'styled-components'
import { Login } from '../components/Login'

export const ShoppingList = () => {
  return(
    <ShoppingSection>
      <Login />
      <p>Shopping list</p>
    </ShoppingSection>
  )
}

const ShoppingSection = styled.section`
  display: flex;
  flex-direction: column;
`