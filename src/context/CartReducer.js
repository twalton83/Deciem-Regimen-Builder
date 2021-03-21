function add(state) {
  console.log('adding!!!')
  return state
}

function update(state) {
  return state
}

function remove(state) {
  return state
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