import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AddItem } from './AddItem.js'
import { ListItems } from './ListItems.js'

export const ShoppingList = () => {
  const accessToken = useSelector(store => store.user.login.accessToken)

  return (
    <ShoppingSection>
      {accessToken && 
      <>
      <AddingItems>
        <AddItem />
      </AddingItems>
      <ListItems />
      </>
      }
    </ShoppingSection>

  )
}

const ShoppingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const AddingItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`