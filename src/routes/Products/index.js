// import { injectReducer } from 'store/reducers'
import Index from './routes/Index'
import Product from './routes/Product'

export default (store) => ({
  path: 'products',
  /* /!*  Async getComponent is only invoked when route matches   *!/
  getComponent (nextState, cb) {
    /!*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   *!/
    require.ensure([], (require) => {
      /!*  Webpack - use require callback to define
       dependencies for bundling   *!/
      const Products = require('./containers/Products').default
      const reducer = require('./modules/Products').default

      /!*  Add the reducer to the store on key 'counter'  *!/
      injectReducer(store, { key: 'products_page', reducer })

      /!*  Return getComponent   *!/
      cb(null, Products)

      /!* Webpack named bundle   *!/
    }, 'Products')
  }, */
  getIndexRoute (partialNextState, cb) {
    cb(null, Index(store))
  },
  childRoutes: [
    Product(store)
  ]
})
