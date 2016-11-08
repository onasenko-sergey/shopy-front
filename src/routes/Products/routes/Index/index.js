import { injectReducer } from 'store/reducers'

export default (store) => ({
  // path: 'index',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Index = require('./containers/Index').default
      const reducer = require('./modules/Index').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'products_page', reducer })

      /*  Return getComponent   */
      cb(null, Index)

    /* Webpack named bundle   */
    }, 'Products')
  }
})
