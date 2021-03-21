import React from 'react'
import styled from 'styled-components'
import products from '../../product-data/products'
import ItemCard from '../ItemCard/ItemCard'

const InventoryDisplayStyles = styled.div`
padding: 16px;

  .product-container {
    display: grid;
    grid-template-columns: 50% 50%;
  }

min-height: 85vh;
`

export default function InventoryDisplay() {
  return (
    <InventoryDisplayStyles>
      <h1 style={{ color: "black" }}>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <ItemCard item={product} />
        ))}
      </div>
    </InventoryDisplayStyles>
  )
}
