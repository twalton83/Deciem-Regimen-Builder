function add(state, payload) {
  return {
    ...state,
    cart: [...state.cart, payload]
  }
}

function update(state, payload) {
  return state
}

function remove(state, payload) {
  return state.filter(item => item.name !== payload.item.name)
}

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      return add(state, payload);
    case 'UPDATE':
      return update(state, payload);
    case 'remove':
      return remove(state, payload);
    default:
      return { ...state };
  }
}

export default reducer