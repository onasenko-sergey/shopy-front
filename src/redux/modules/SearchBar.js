// Constants

export const constants = {
  OPEN_SEARCHBAR: 'OPEN_SEARCHBAR',
  CLOSE_SEARCHBAR: 'CLOSE_SEARCHBAR',
  SEARCH: 'SEARCH',
  SET_REF: 'SET_REF'
}

// Action Creators

export const actions = {
  openSearch: () => ({
    type: constants.OPEN_SEARCHBAR
  }),
  closeSearch: () => ({
    type: constants.CLOSE_SEARCHBAR
  }),
  search: (query) => {
    console.log('Search: ', query)
    return {
      type: constants.SEARCH,
      payload: query
    }
  },
  setFormRef: (ref) => {
    return {
      type: constants.SET_REF,
      payload: ref
    }
  }
}

// Reducer

export const defaultState = {
  isOpened: false,
  formRef: null
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case constants.OPEN_SEARCHBAR:
      return {
        ...state,
        isOpened: true
      }
    case constants.CLOSE_SEARCHBAR:
      return {
        ...state,
        isOpened: false
      }
    case constants.SET_REF:
      return {
        ...state,
        formRef: action.payload
      }
    default:
      return state
  }
}
