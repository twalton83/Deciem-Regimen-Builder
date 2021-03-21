import React, { createContext, useReducer } from 'react'
import reducer from './CartReducer'

export const CartContext = createContext()

const initialState = {
  cart: [{
    "name": "Alpha Arbutin 2% + HA",
    "price": "8.90",
    "image": "/assets/rdn-alpha-arbutin-2pct-ha-30ml.png",
    "desc": "A concentrated serum with pure alpha arbutin and hyaluronic acid"
  },
  {
    "name": "Mineral UV Filters SPF 15 with Antioxidants",
    "price": "8.90",
    "image": "/assets/rdn-mineral-uv-filters-spf-15-with-antioxidants-50ml.png"
  },
  {
    "name": "Ascorbic Acid 8% + Alpha Arbutin 2%",
    "price": "10.00",
    "image": "/assets/rdn-100pct-AscorbicAcid8+AlphaArbutin2-Product-30ml.png",
    "desc": "Broad Spectrum SPF 15 UVA/UVB Protection"
  }, {
    "name": "Retinol 0.5% in Squalane",
    "price": "5.80",
    "image": "/assets/rdn-retinol-0-5pct-in-squalane-30ml.png",
    "desc": "Highly-Stable, Water-Free Solution of 0.5% Pure Retinol"
  }, {
    "name": "The Balance Set",
    "price": "29.00",
    "image": "/assets/rdn-balance-set.png"
  }, {
    "name": "100% Cold-Pressed Virgin Marula Oil",
    "price": "9.90",
    "image": "/assets/rdn-100pct-cold-pressed-virgin-marula-oil-30ml.png",
    "desc": "Daily support formula for hair and skin"
  },
  {
    "name": "100% Plant-Derived Squalane",
    "price": "7.90",
    "image": "/assets/rdn-100pct-plant-derived-squalane-30ml.png",
    "desc": "A lightweight plant-derived solution to support healthy hydration"
  },
  {
    "name": "100% Plant-Derived Hemi-Squalane",
    "price": "3.95",
    "image": "/assets/rdn-100pct-plant-derived-hemi-squalane-30ml.png",
    "desc": "A Fast-Absorbing, Non-Greasy Hydration Solution for Skin and Hair"
  },],
}


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}



