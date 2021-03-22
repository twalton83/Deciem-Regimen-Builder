import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'

const CartStyles = styled.div`
display: flex;
flex-direction: column;

padding: 16px;
`


export default function Cart() {
  const { state } = useContext(CartContext)


  return (
    <CartStyles>
      {state.cart.map(item => (
        <CartItem key={`${item.name}${item.quantity}`} item={item} />
      ))}
      <p>
        Total: {state.total}
      </p>
    </CartStyles>
  )
}
