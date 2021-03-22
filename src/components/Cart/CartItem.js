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

label {
  display: flex;

  width: 100px;

  font-weight: 600;

  input {
    width: 30px;

    border: none;
    border-bottom: 1px solid black;

    font-weight: 600;
    text-align: center;
  }
}
`

export default function CartItem({ item }) {
  const { dispatch } = useContext(CartContext)

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE",
      payload: {
        item,
        qty: parseInt(e.target.value)
      }
    })
  }

  return (
    <CartItemStyles>
      <img src={item.image} alt="" />
      <p>
        {item.name}
      </p>
      <p>
        <label htmlFor="qty">
          Qty:
            <input onChange={handleChange} type="number" value={item.quantity} name="qty" id="quantity" />
        </label>
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
