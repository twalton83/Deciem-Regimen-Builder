import products from './products'

function findProduct(name) {
  const item = name.replaceAll('-', ' ')
    .replaceAll('pct', '%')
    .replaceAll('plus', '+')
  return products.filter((product) => item === product.name)[0]
}

function createURL(name) {
  return name.replaceAll(' ', '-')
    .replaceAll('%', 'pct')
    .replaceAll('+', 'plus')
}

function isCompatible(item, contraindications) {
  return contraindications.includes(item.name) || contraindications.some(c => item.category.includes(c))
}

function filterByCategory(category) {
  return products.filter(product => product.category.includes(category))
}


export {
  findProduct,
  createURL,
  isCompatible,
  filterByCategory
}