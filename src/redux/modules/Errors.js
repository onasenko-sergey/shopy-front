// Constants

export const constants = {
  ADD_ERROR: 'ADD_ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR'
}

// Action Creators

export const actions = {
  add: (err) => ({
    type: constants.ADD_ERROR,
    payload: err
  }),
  remove: (key) => ({
    type: constants.REMOVE_ERROR,
    payload: key
  })
}

// Reducer
export const defaultState = []

export default function (state = defaultState, action) {
  switch (action.type) {
    case constants.ADD_ERROR:
      return [
        action.payload,
        ...state
      ]
    case constants.REMOVE_ERROR:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]
    default:
      return state
  }
}
