import React from 'react'
import data from '../../product-data/products.json'
import ItemCard from '../ItemCard/ItemCard'

export default function InventoryDisplay() {
  return (
    <div>
      <h1 style={{ color: "black" }}>SHOP</h1>
      {data.products.map((product) => (
        <ItemCard item={product} />
      ))}
    </div>
  )
}
