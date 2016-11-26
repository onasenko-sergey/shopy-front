import { getProfile } from 'utils/backendAPI'
import { reject, resolve } from 'redux-promised'
import { actions as errorsActions } from 'redux/modules/Errors'

// Constants
export const constants = {
  GET_PROFILE: 'GET_PROFILE'
}

// Actions
let initiated

export const actions = {
  init: (initOnce) => {
    if (initOnce && initiated) return { type: null }
    initiated = true
    return (dispatch) => {
      dispatch({
        type: constants.GET_PROFILE,
        payload: getProfile().catch((err) => {
          dispatch(errorsActions.add(err))
          throw err
        })
      })
    }
  }
}

// Action Handlers
// const ACTION_HANDLERS = {
//   [constants.]: (state, action) => {}
// }

// Reducer
const defaultState = {
  profile: null
}

// export default function(state = defaultState , action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }

export default function (state = defaultState, action) {
  switch (action.type) {
    case resolve(constants.GET_PROFILE):
      return {
        profile: action.payload.data.user
      }
    case reject(constants.GET_PROFILE):
      return {
        profile: null
      }
    default:
      return state
  }
}
