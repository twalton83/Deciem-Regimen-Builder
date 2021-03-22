import React from 'react'
import styled from 'styled-components'
import products from '../../product-data/products'
import ItemCard from '../ItemCard/ItemCard'
import { useContraindications } from '../../product-data/hooks'
import { isCompatible } from '../../product-data/helpers'

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
  const contraindications = useContraindications()

  return (
    <InventoryDisplayStyles>
      <h1 style={{ color: "black" }}>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <ItemCard key={product.name} item={product} contraindication={contraindications.length > 0 ? isCompatible(product, contraindications) : false} />
        ))}
      </div>
    </InventoryDisplayStyles>
  )
}
