import { combineReducers } from 'redux'
import locationReducer from './location'
import productsReducer from 'redux/modules/Products'
import errorsReducer from 'redux/modules/Errors'
import userReducer from 'redux/modules/User'
import { reducer as formReducer } from 'redux-form'

/* eslint-disable camelcase */

import core_layout from 'layouts/CoreLayout/modules'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    form: formReducer,
    products: productsReducer,
    errors: errorsReducer,
    user: userReducer,
    core_layout,
    ...asyncReducers
  })
}
/* eslint-enable camelcase */

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
