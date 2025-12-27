import React, { Component } from 'react'
import './Products.css'

import Card from '../components/Card'

export default class Products extends Component {
  render() {
    return (
      <>
      <section className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      </>
    )
  }
}
