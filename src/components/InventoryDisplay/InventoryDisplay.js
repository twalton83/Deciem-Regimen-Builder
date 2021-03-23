import React from 'react'
import styled from 'styled-components'
import ItemCard from '../ItemCard/ItemCard'
import { useContraindications } from '../../product-data/hooks'
import { isCompatible } from '../../product-data/helpers'
import { Link } from 'react-router-dom'

const InventoryDisplayStyles = styled.div`
padding: 16px;

  .product-container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 12px;

    padding-bottom: 15vh;

    @media(min-width: 768px){
      grid-template-columns: repeat(4, 1fr)
    }
  }

min-height: 85vh;
max-height: 85vh;

overflow-y: scroll;

h2 {
  font-weight: 300;
}

a {
  color: inherit;

}
`

export default function InventoryDisplay({ products, category }) {
  const contraindications = useContraindications()

  return (
    <InventoryDisplayStyles>
      <h1 style={{ color: "black" }}>Products</h1>
      {category && <h2><Link to="/shop">All</Link> &gt; {category}</h2>}
      <div className="product-container">
        {products.map((product) => (
          <ItemCard key={product.name} item={product} contraindication={contraindications.length > 0 ? isCompatible(product, contraindications) : null} />
        ))}
      </div>
    </InventoryDisplayStyles>
  )
}
