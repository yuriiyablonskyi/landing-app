import Header from './components/Header/Header'
import Authorization from './components/Authorization/Authorization'
import Products from './components/Products/Products'
import LIST from './dataItems'
import { useState } from 'react'

function App() {
  const [listItems, setListItems] = useState(LIST)
  const [isAuthorizationVisible, setIsAuthorizationVisible] = useState(false)
  
  const handleVisibleonVisible = boolean => setIsAuthorizationVisible(boolean)

  return (
    <div className="App">
      <Header onVisible={handleVisibleonVisible} />
      {isAuthorizationVisible && <Authorization onVisible={handleVisibleonVisible} />}
      <Products listItems={listItems} />
    </div>
  )
}

export default App
