import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { user } from './reducers/user'
import { ShoppingList } from './pages/ShoppingList'

const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
        <ShoppingList />
    </Provider>

  )
}

export default App;
