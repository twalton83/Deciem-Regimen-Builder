import products from './products'

function findProduct(name) {
  return products.filter((product) => decodeURIComponent(name))[0]
}

export {
  findProduct
}