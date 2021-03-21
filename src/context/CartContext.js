import React, { createContext, useReducer } from 'react'
import reducer from './CartReducer'

export const CartContext = createContext()

const initialState = {
  cart: [],
}


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}



