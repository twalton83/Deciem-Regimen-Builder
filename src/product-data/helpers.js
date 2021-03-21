import products from './products'

function findProduct(name) {
  const item = name.replaceAll('-', ' ')
    .replaceAll('pct', '%')
    .replaceAll('plus', '+')
  console.log(item)
  return products.filter((product) => item === product.name)[0]
}

function createURL(name) {
  return name.replaceAll(' ', '-')
    .replaceAll('%', 'pct')
    .replaceAll('+', 'plus')
}


export {
  findProduct,
  createURL
}