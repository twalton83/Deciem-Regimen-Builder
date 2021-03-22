import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext'

function useContraindications() {
  const [contraindications, setContraindications] = useState([]);
  // grabs cart items out of context
  const { state } = useContext(CartContext)

  useEffect(() => {
    function gatherContraindications(items) {
      // TO DO, avoid duplicates, use .reduce()
      return items.map(item => item.contraindications).flat()
    }
    setContraindications(gatherContraindications(state.cart))
  }, [state.cart])
  return contraindications
}


export {
  useContraindications
}