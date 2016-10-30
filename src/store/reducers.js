import { combineReducers } from 'redux'
import locationReducer from './location'
import modalsReducer from 'redux/modules/Modals'
import errorsReducer from 'redux/modules/Errors'
import userReducer from 'redux/modules/User'
import { reducer as formReducer } from 'redux-form'
import searchBar from 'redux/modules/SearchBar'
import searchResults from 'redux/modules/SearchResults'
import productsReducer from 'redux/modules/Products'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    modals: modalsReducer,
    errors: errorsReducer,
    user: userReducer,
    form: formReducer,
    search: combineReducers({
      bar: searchBar,
      results: searchResults
    }),
    products: productsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
