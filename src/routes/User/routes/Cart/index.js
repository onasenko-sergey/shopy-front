import { injectReducer } from 'store/reducers'
import requireAuth from 'containers/RequireAuthHOC'

export default (store) => ({
  path: 'cart',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Cart = requireAuth(require('./containers/Cart').default)
      const reducer = require('./modules/Cart').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'cart_page', reducer })

      /*  Return getComponent   */
      cb(null, Cart)

    /* Webpack named bundle   */
    }, 'Cart')
  }
})
