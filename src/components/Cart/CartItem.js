import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../context/CartContext'

const CartItemStyles = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

img {
  max-width: 100px;
}

p {
  max-width: 30%;
}

button {
  background: transparent;
  border: none;
  font-weight: 600;
}
`

export default function CartItem({ item }) {
  const { state, dispatch } = useContext(CartContext)

  return (
    <CartItemStyles>
      <img src={item.image} alt="" />
      <p>
        {item.name}
      </p>
      <p>
        <strong>
          {item.price} USD
        </strong>
      </p>
      <button onClick={() => dispatch({
        type: "REMOVE",
        payload: {
          item
        }
      })} >
        X
      </button>
    </CartItemStyles>
  )
}
