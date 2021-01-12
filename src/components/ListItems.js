import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const ListItems = (props) => {
  const SHOPPINGITEMS_URL = 'http://localhost:8080/items'
  const accessToken = useSelector(store => store.user.login.accessToken)
  const currentUser = useSelector(store => store.user.login.userId)
  const newItem = useSelector(store => store.shopping.listItem.item)
  const [itemsInList, setItemsInList] = useState([])
  const [sortedField, setSortedField] = useState(null);

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

let sortedItems = [...myItemsList]
if (sortedField !== null ) {
  sortedItems.sort((a, b) => {
    if (a[sortedField] < b[sortedField]) {  
      return -1
    }
    if (a[sortedField] > b[sortedField]) {
      return 1
    }
    return 0
  })
}

  return (
    <div>
      <ListTable>
        <TableRow>
          <TableHead><button type="button" onClick={() => setSortedField('item')}>Item</button></TableHead>
          <TableHead><button type="button" onClick={() => setSortedField('section')}>Section</button></TableHead>
          <TableHead><button type="button" onClick={() => setSortedField('basket')}>Basket</button></TableHead>
        </TableRow>
        {sortedItems.map(item => (
        <TableRow key={item=item._id}>
          <TableDetail>{item.item}</TableDetail>
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
const TableHead = styled.td`
  color: black;
  font-weight: bold;
`
const TableDetail = styled.td`
  color: black;
`