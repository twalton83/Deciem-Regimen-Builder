import React from 'react'
import styled from 'styled-components'

const ProductDisplayStyles = styled.div`
display: flex;
flex-direction: column;

`

export default function ProductDisplay({ item }) {
  return (
    <ProductDisplayStyles>
      <p>
        {item.name}
      </p>
      <img src={item.image} alt="" />

    </ProductDisplayStyles>
  )
}
