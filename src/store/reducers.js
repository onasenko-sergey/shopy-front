import { combineReducers } from 'redux'
import locationReducer from './location'
import modalsReducer from 'redux/modules/Modals'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    modals: modalsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
