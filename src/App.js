import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { user } from './reducers/user'
import { Home } from './pages/Home'

const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>

  )
}

export default App;
