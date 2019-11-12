import React, { useState } from 'react'
import NavBar from './components/nav/NavBar'
import { menu } from './data/menu'

function App() {
  const [menuItems] = useState(menu)
  return (
    <div className='NavWrapper'>
      <NavBar menuItems={menuItems} />
    </div>
  )
}

export default App
