import { injectReducer } from 'store/reducers'
import requireAuth from 'containers/RequireAuthHOC'

export default (store) => ({
  path: 'profile',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Profile = requireAuth(require('./containers/Profile').default)
      const reducer = require('./modules/Profile').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'profile_page', reducer })

      /*  Return getComponent   */
      cb(null, Profile)

    /* Webpack named bundle   */
    }, 'Profile')
  }
})
