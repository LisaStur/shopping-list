import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { shopping } from '../reducers/shopping'

const ADDITEM_URL = 'http://localhost:8080/items'

export const AddItem = () => {
  const dispatch = useDispatch()
  const [addingItem, setAddingItem] = useState(false)
  const [item, setItem] = useState('')
  const [section, setSection] = useState('')
  const [basket, setBasket] = useState('')
  const accessToken = useSelector(store => store.user.login.accessToken)

  const handleAddItem = (event) => {
    event.preventDefault()

    fetch(ADDITEM_URL, {
      method: 'POST',
      body: JSON.stringify({ item, section, basket }),
      headers: { Authorization: accessToken, 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(shopping.actions.setItem({ item: json.item }))
      dispatch(shopping.actions.setSection({ section: json.section }))
      dispatch(shopping.actions.setBasket({ basket: json.basket }))
      dispatch(shopping.actions.setShopper({ shopper: json.shopper }))
      dispatch(shopping.actions.setUpdate({  }))
      setItem ('')
      setSection('')
      setBasket('')
    })
  }

  return (
    <InputSection>
      <LongButton type='submit'  onClick={() => setAddingItem(!addingItem)}>
        {!addingItem && 'Add items'} 
        {addingItem && 'Done adding'}
      </LongButton>
      {addingItem && 
        <>
          <Input required minLength="3" type='text' placeholder='item' value={item} onChange={event => setItem(event.target.value)}/>
          <Input required minLength="3" type='text' placeholder='section' value={section} onChange={event => setSection(event.target.value)}/>
          <Input minLength="3" type='text' placeholder='basket' value={basket} onChange={event => setBasket(event.target.value)}/>
          <AddButton type='submit' onClick={handleAddItem}>Add</AddButton>
        </>
      }

    </InputSection>
  )
}

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`
const Input = styled.input`
  margin: 2px;
  width: 100%;
  height: 20px;
`
const AddButton = styled.button`
  display: flex;
  justify-content: center;
  width: 70px;
  margin: 20px;
  border-radius: 10px;
  cursor: pointer;
`
const LongButton = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  margin: 0  0 20px 0;
  border-radius: 10px;
  cursor: pointer;
`