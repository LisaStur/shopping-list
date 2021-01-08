import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const ListItems = () => {
  const SHOPPINGITEMS_URL = 'http://localhost:8080/items'
  const accessToken = useSelector(store => store.user.login.accessToken)
  const currentUser = useSelector(store => store.user.login.userId)
  const newItem = useSelector(store => store.shopping.listItem.item)
  const [itemsInList, setItemsInList] = useState([])

  useEffect(() => {
    fetch(SHOPPINGITEMS_URL, {
      method: 'GET',
      headers: { Authorization: accessToken,'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => setItemsInList(json)
    )
  }, [accessToken, newItem])
  console.log(itemsInList)

const myItemsList = itemsInList.filter(item => item.shopper._id === currentUser)

  return (
    <div>
      <ListTable>
    {myItemsList.map(item => (
      <TableRow key={item=item._id}>
        <TableDetail>{item.item}</TableDetail>
        <TableDetail>{item.amount}</TableDetail>
        <TableDetail>{item.section}</TableDetail>
        <TableDetail>{item.basket}</TableDetail>
      </TableRow>
    )) }   
    </ListTable>
    </div>
  )
}

const ListTable = styled.table`
  width: 100%;
  padding: 5%;
`
const TableRow = styled.tr`
  background-color: white;
`
const TableDetail = styled.td`
  color: black;
`