import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Index from './Index'

function App() {

  return (
    <>
    <Provider store={store}>
     <Index/>
    </Provider>
    </>
  )
}

export default App
