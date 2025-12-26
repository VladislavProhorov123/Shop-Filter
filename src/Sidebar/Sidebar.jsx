import React from 'react'
import './Sidebar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import Category from './Category/Category'


export default function Sidebar() {
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1>
          <AiOutlineShoppingCart />
        </h1>
      </div>
      <Category />
      <Price />
      <Colors />
    </section>
    </>
  )
}
