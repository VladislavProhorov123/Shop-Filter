import React, { useContext } from 'react'
import './Recommended.css'
import { FilterContext } from '../context/FilterContext'

export default function Recommended() {
  const {setCategory} = useContext(FilterContext)
  return (
    <>
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended-btns">
        <button className='btns' onClick={() => setCategory("")}>All Products</button>
        <button className='btns' onClick={() => setCategory("Nike")}>Nike</button>
        <button className='btns' onClick={() => setCategory("Adidas")}>Adidas</button>
        <button className='btns' onClick={() => setCategory("Puma")}>Puma</button>
        <button className='btns' onClick={() => setCategory("Vans")}>Vans</button>
      </div>
    </div>
    </>
  )
}
