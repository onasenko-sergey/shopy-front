import { actions as productsActions } from 'redux/modules/Products'

// backend responses might have data.products array if succeeded
// intercept actions with such a payload and save to store
export const products = store => next => action => {
  const products = ((action.payload || {}).data || {}).products
  if (!products) return next(action)
  store.dispatch(productsActions.populate(products))
  const productIds = products.map((product) => (product._id))
  action.payload.data.products = productIds
  next(action)
}

export default products
