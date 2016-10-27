import Redirect from './routes/Redirect'
import Profile from './routes/Profile'
import Cart from './routes/Cart'

export default (store) => ({
  path: 'user',
  childRoutes: [
    Redirect,
    Profile(store),
    Cart(store)
  ]
})
