import React, { createContext, useReducer } from 'react'
import reducer from './CartReducer'

export const CartContext = createContext()

const initialState = {
  cart: [{
    "name": "Lactic Acid 10% + HA",
    "price": "6.80",
    "image": "/assets/rdn-lactic-acid-10pct-ha-30ml.png",
    "contraindications": ["Direct Acids", "Peptides", "Retinoids", "Vitamin C", "100% Niacinamide Powder", "EUK 134 0.1%"],
    "category": ["Direct Acids"],
    "desc": "A high-strength lactic acid superficial peeling formulation",
  },
  {
    "name": "Magnesium Ascorbyl Phosphate 10%",
    "price": "9.60",
    "image": "/assets/rdn-magnesium-ascorbyl-phosphate-10pct-30ml.png",
    "contraindications": ["Niacinamide"],
    "category": [],
    "desc": "A brightening hydrator with stabilized vitamin C derivative",
  },
  {
    "name": "Azelaic Acid Suspension 10%",
    "price": "7.90",
    "image": "/assets/rdn-azelaic-acid-suspension-10pct-30ml.png",
    "contraindications": [],
    "category": [],
    "desc": "Multifunctional brightening formula",
  },
  {
    "name": "The No-Brainer Set",
    "price": "29.00",
    "image": "/assets/rdn-no-brainer-set.png",
    "contraindications": [],
    "category": ["set"],
    "desc": "A no-brainer",
  },
  {
    "name": "Granactive Retinoid 2% in Squalane",
    "price": "9.60",
    "image": "/assets/rdn-granactive-retinoid-5pct-in-squalane-30ml.png",
    "contraindications": ["Retinoids", "Direct Acids", "Vitamin C"],
    "category": ["Retinoids"],
    "desc": "Highly-Stable, Water-Free Solution of 0.5% Ester of All-Trans Retinoic Acid",
  },
  {
    "name": "Salicylic Acid 2% Solution",
    "price": "5.30",
    "image": "/assets/rdn-salicylic-acid-2pct-solution-30ml.png",
    "contraindications": ["Direct Acids", "Peptides", "Retinoids", "Vitamin C", "100% Niacinamide Powder", "EUK 134 0.1%"],
    "category": [],
    "desc": "With 2% salicylic acid and witch hazel",
  },
  {
    "name": "AHA 30% + BHA 2% Peeling Solution",
    "price": "7.20",
    "image": "/assets/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png",
    "contraindications": ["Direct Acids", "Peptides", "Retinoids", "Vitamin C", "100% Niacinamide Powder", "EUK 134 0.1%"],
    "category": ["Direct Acid"],
    "desc": "With 30% alpha hydroxy acids (glycolic/lactic/tartaric/citric), 2% beta hydroxy acid (salicylic acid), hyaluronic acid crosspolymer, vitamin b5, black carrot and tasmanian pepperberry",
  },
  {
    "name": "Granactive Retinoid 2% Emulsion (Previously Advanced Retinoid 2%)",
    "price": "9.80",
    "image": "/assets/rdn-granactive-retinoid-2pct-in-squalane-30ml.png",
    "contraindications": ["Retinoids", "Direct Acids", "Vitamin C"],
    "category": ["Retinoids"],
    "desc": "Previously Advanced Retinoid 2%",
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



