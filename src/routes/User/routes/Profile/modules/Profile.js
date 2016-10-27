// Constants
// export const constants = { };

// Actions
// export const actions = { };

// Action Handlers
// const ACTION_HANDLERS = {
//   [constants.]: (state, action) => {}
// }

// Reducer
const defaultState = {}

// export default function(state = defaultState , action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
