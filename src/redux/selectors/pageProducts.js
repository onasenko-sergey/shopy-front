import { createSelector } from 'reselect'

const productsSelector = state => state.products
const idsSelector = (page, key) => state => state[page][key]

export const pageProductsSelector = (pageName, productsKey) => createSelector(
  productsSelector,
  idsSelector(pageName, productsKey),
  (products, ids) => (ids.map(id => products[id]))
)

export default pageProductsSelector
