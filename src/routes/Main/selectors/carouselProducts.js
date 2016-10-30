import { createSelector } from 'reselect'

const productsSelector = state => state.products
const carouselProductsIds = state => state.main_page.carouselProducts

export const carouselProductsSelector = createSelector(
  productsSelector,
  carouselProductsIds,
  (products, ids) => (ids.map(id => products[id]))
)

export default carouselProductsSelector
