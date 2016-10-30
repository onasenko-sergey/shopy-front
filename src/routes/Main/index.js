import { injectReducer } from 'store/reducers'

export default (store) => ({
  // path: 'main',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Main = require('./containers/Main').default
      const reducer = require('./modules/Main').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'main_page', reducer })

      /*  Return getComponent   */
      cb(null, Main)

    /* Webpack named bundle   */
    }, 'Main')
  }
})
