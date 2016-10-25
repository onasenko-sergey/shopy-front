// Constants

export const constants = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

// Action Creators

export const actions = {
  // to open modal provide modalFunc, where component is some JSX:
  // (key) => (<component key={key} />)
  open: (modalFunc) => ({
    type: constants.OPEN_MODAL,
    payload: modalFunc
  }),
  close: () => ({
    type: constants.CLOSE_MODAL
  })
}

// Reducer
export const defaultState = {
  stack: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return {
        ...state,
        stack: [
          ...state.stack,
          action.payload
        ]
      }
    case constants.CLOSE_MODAL:
      return {
        ...state,
        stack: [
          ...state.stack.slice(0, -1)
        ]
      }
    default:
      return state
  }
}
