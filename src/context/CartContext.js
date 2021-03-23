import React, { createContext, useReducer, useEffect } from 'react'
import reducer from './CartReducer'

export const CartContext = createContext()

const initialState = {
  total: 0,
  cart: [],
}


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const total = state.cart.reduce((acc, curr) => {
      return acc += parseInt(curr.price * 100)
    }, 0)

    dispatch({
      type: 'UPDATE-TOTAL',
      payload: total
    })

  }, [state.cart])


  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}



