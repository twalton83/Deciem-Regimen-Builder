import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import BackButton from '../BackButton/BackButton'

const CartStyles = styled.div`
display: flex;
flex-direction: column;

padding: 16px;

  .total {
    font-weight: 600;
    text-align: right;
  }

  .checkout {
    height: 48px;
    width: 120px;

    border: none;

    background-color: black;
    color: white;

    font-weight: 600;
    font-size: 16px;

    margin-left: auto;
    margin-top: 16px;
  }
`


export default function Cart() {
  const { state } = useContext(CartContext)

  return (
    <CartStyles>
      <BackButton />
      {state.cart.map(item => (
        <CartItem key={`${item.name}${item.quantity}`} item={item} />
      ))}
      <p className="total">
        TOTAL: {state.total} USD
      </p>
      <button className="checkout">
        CHECK OUT
      </button>
    </CartStyles>
  )
}
