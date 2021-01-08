import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listItem: {
    item: null,
    section: null,
    basket: null,
    shopper: 0,
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
    }
  }
})
