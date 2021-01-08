import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listItem: {
    item: null,
    amount: 1,
    section: null,
    basket: null,
    shopper: 0,
    update: null,
  }
}
export const shopping = createSlice({
  name: 'shopping',
  initialState: initialState,
  reducers: {
    setItem: (state, action) => {
      const { item } = action.payload
      state.listItem.item = item
    },
    setAmount: (state, action) => {
      const { amount } = action.payload
      state.listItem.amount = amount
    },
    setSection: (state, action) => {
      const { section } = action.payload
      state.listItem.section = section
    },
    setBasket: (state, action) => {
      const { basket } = action.payload
      state.listItem.basket = basket
    },
    setShopper: (state, action) => {
      const { shopper } = action.payload
      state.listItem.shopper = shopper
    },
    setUpdate: (state, action) => {
      const { update } = action.payload
      state.listItem.update = update
    }
  }
})
