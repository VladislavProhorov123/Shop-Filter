import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

export default function App() {
  return (
    <div>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
      
    </div>
  )
}
