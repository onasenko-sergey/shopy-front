import Redirect from './routes/Redirect'
import Profile from './routes/Profile'

export default (store) => ({
  path: 'user',
  childRoutes: [
    Redirect,
    Profile(store)
  ]
})
