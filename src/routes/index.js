import CoreLayout from 'layouts/CoreLayout'
import User from './User'
import Main from './Main'

export const createRoutes = (store) => {
  let routes = [
    {
      path: '/',
      component: CoreLayout,
      indexRoute: Main(store),
      childRoutes: [
        User(store)
      ]
    }
  ]

  // use test page only in development
  if (__DEV__) {
    const Test = require('./Test').default
    // do not use core layout for test
    const testRoute = {
      path: '/',
      childRoutes: [
        Test(store)
      ]
    }
    routes.push(testRoute)
  }

  return routes
}

export default createRoutes
