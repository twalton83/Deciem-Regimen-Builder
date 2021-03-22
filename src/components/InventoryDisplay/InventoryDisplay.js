import React, { useContext } from 'react'
import styled from 'styled-components'
import products from '../../product-data/products'
import ItemCard from '../ItemCard/ItemCard'
import { CartContext } from '../../context/CartContext'
import { useContraindications } from '../../product-data/hooks'

const InventoryDisplayStyles = styled.div`
padding: 16px;

  .product-container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 12px;
  }

min-height: 85vh;
`

export default function InventoryDisplay() {
  const { state, dispatch } = useContext(CartContext)
  const contraindications = useContraindications()

  return (
    <InventoryDisplayStyles>
      <h1 style={{ color: "black" }}>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          // To do, make filter for searching contraindication
          <ItemCard key={product.name} item={product} contraindication={contraindications.find(c => product.name)} />
        ))}
      </div>
    </InventoryDisplayStyles>
  )
}
