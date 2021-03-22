import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext'

function useContraindications(cart) {
  const [contraindications, setContraindications] = useState([]);
  // grabs cart items out of context
  const { state } = useContext(CartContext)

  useEffect(() => {
    function gatherContraindications(items) {
      // maps over items and flattens the array of contraindications
      return items.map(item => item.contraindications).flat()
    }
    setContraindications(gatherContraindications(state.cart))
  }, [state.cart])
  return contraindications
}

export {
  useContraindications
}