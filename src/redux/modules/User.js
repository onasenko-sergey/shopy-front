import { callVkAuth, getVkAuthPromise } from 'utils/vkAuth'
import { authVk, setAuthHeader, resetAuthHeader } from 'utils/backendAPI'
import { request, reject, resolve } from 'redux-promised'
import { actions as errorsActions } from './Errors'
import { actions as cartActions } from './Cart'

// Constants

export const constants = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

// Action Creators

/*
Action:
  {
    type: resolve(userConstants.LOGIN)
  }
is dispatched at 'Cart' module in getCart() action creator if cart backend request has been successful.
Every user needs a cart.
*/
//
export const actions = {
  login: () => (dispatch, getState) => {
    if (!getState().user.isBeingFetched) {
      // as far as i want to get LOGIN_REQUEST action immediately and don't want to get
      // any intermediate promise results - i prefer to dispatch actions manually using
      // redux-promised convention
      dispatch({
        type: request(constants.LOGIN)
      })
      // open vk auth popup at client
      getVkAuthPromise({})
        .then(({ code, redirectUri }) => {
          // server auth using received code
          return authVk(code, redirectUri)
        })
        .then((response) => {
          const token = response.data.auth_token
          localStorage.setItem('shopy-jwt', token)
          // config axios to send authentication jwt with every request
          setAuthHeader(token)
          return response
        })
        .then(() => {
          dispatch(cartActions.getCart())
        })
        .catch((err) => {
          dispatch({
            type: reject(constants.LOGIN)
          })
          dispatch(errorsActions.add(err))
        })
    }
  },
  logout: (complete) => {
    localStorage.removeItem('shopy-jwt')
    resetAuthHeader()
    if (complete) {
      callVkAuth({ revoke: true })
    }
    return {
      type: constants.LOGOUT
    }
  },
  init: () => (dispatch) => {
    const token = localStorage.getItem('shopy-jwt')
    if (token) {
      setAuthHeader(token)
      dispatch(cartActions.getCart())
    }
  }
}

// Reducer
export const defaultState = {
  isAuthorized: false,
  isBeingFetched: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case request(constants.LOGIN):
      return {
        ...state,
        isBeingFetched: true
      }
    case resolve(constants.LOGIN):
      return {
        ...state,
        isAuthorized: true,
        isBeingFetched: false
      }
    case reject(constants.LOGIN):
      return {
        ...state,
        isAuthorized: false,
        isBeingFetched: false
      }
    case constants.LOGOUT:
      return {
        ...state,
        isAuthorized: false
      }
    default:
      return state
  }
}
