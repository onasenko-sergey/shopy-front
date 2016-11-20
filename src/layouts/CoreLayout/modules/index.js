import { combineReducers } from 'redux'
import searchBar from './SearchBar'
import modalsReducer from './Modals'
import searchResults from './SearchResults'

export const coreLayoutReducer = combineReducers({
  search: combineReducers({
    bar: searchBar,
    results: searchResults
  }),
  modals: modalsReducer
})

export default coreLayoutReducer
