function add(state, payload) {
  const { item, quantity } = payload
  return {
    ...state,
    cart: [...state.cart, item]
  }
}

function update(state, payload) {
  return state
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
    default:
      return { ...state };
  }
}

export default reducer