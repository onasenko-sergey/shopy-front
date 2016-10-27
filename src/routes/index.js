import React from 'react'
import CoreLayout from 'layouts/CoreLayout'
import User from './User'

export const createRoutes = (store) => {
  let routes = [
    {
      path: '/',
      component: CoreLayout,
      indexRoute: { component: () => (<div>Hello world</div>) },
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
