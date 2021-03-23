function add(state, payload) {
  const { item, quantity } = payload

  return {
    ...state,
    cart: [...state.cart, { item, quantity }]
  }
}

function update(state, payload) {
  const { item, qty } = payload;

  const updatedCart = state.cart.map(cartItem => {
    if (cartItem.item.name === item.name) {
      cartItem.quantity = qty
    }
    return cartItem
  })
  return { ...state, cart: updatedCart }
}

function updateTotal(state, payload) {
  return {
    ...state, total: (payload * .01).toFixed(2)
  }
}

function remove(state, payload) {
  return {
    ...state,
    cart: state.cart.filter(item => item.name !== payload.item.name)
  }
}

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      return add(state, payload);
    case 'UPDATE':
      return update(state, payload);
    case 'REMOVE':
      return remove(state, payload);
    case 'UPDATE-TOTAL':
      return updateTotal(state, payload)
    default:
      return { ...state };
  }
}

export default reducer