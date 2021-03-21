import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'

const CartStyles = styled.div`
display: flex;
flex-direction: column;

`


export default function Cart() {
  const { state, dispatch } = useContext(CartContext)


  return (
    <CartStyles>
      {state.cart.map(item => (
        <CartItem item={item} />
      ))}
    </CartStyles>
  )
}
