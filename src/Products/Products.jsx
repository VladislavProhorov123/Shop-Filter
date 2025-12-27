import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'
import Card from '../components/Card'
import './Products.css'

export default function Products() {
  const {filteredProducts } = useContext(FilterContext)
  return (
    <>
    <section className="card-container">
      {filteredProducts.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </section>
    </>
  )
}

