import products from './products'

function findProduct(name) {
  console.log(name)
  const item = name.replaceAll('-', ' ')
    .replaceAll('8208', '-')
    .replaceAll('pct', '%')
    .replaceAll('plus', '+')
  console.log(item, "item name after parsing")
  console.log(products.filter((product) => item === product.name)[0])
  return products.filter((product) => item === product.name)[0]
}

function createURL(name) {
  return name
    .replaceAll('-', '8208')
    .replaceAll(' ', '-')
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