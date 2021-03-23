function add(state, payload) {
  const { item, qty } = payload

  if (state.cart.some(cartItem => cartItem.item.name === item.name)) return update(state, { ...payload, status: "existing" })

  return {
    ...state,
    cart: [...state.cart, { item, qty }]
  }
}

function update(state, payload) {
  const { item, qty, status } = payload;
  let updatedCart;

  if (status === 'existing') {
    updatedCart = state.cart.map(cartItem => {
      if (cartItem.item.name === item.name) {
        if (qty !== null) {
          cartItem.qty += qty
        }
        else {
          cartItem.qty = 0
        }
      }
      return cartItem
    })
  } else {
    updatedCart = state.cart.map(cartItem => {
      if (cartItem.item.name === item.name) {
        cartItem.qty = qty
      }
      return cartItem
    })
  }
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