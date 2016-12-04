import { getCart, addToCart } from 'utils/backendAPI'
import { reject, resolve } from 'redux-promised'
import { actions as errorsActions } from './Errors'
import { actions as userActions, constants as userConstants } from './User'

// Constants

export const constants = {
  GET_CART: 'GET_CART',
  ADD_TO_CART: 'ADD_TO_CART'
}

// Action Creators

export const actions = {
  // if response status is 401 - token has expired.
  getCart: () => (dispatch) => {
    dispatch({
      type: constants.GET_CART,
      payload: getCart()
        .then((data) => {
          // got cart - jwt is valid
          dispatch({
            type: resolve(userConstants.LOGIN)
          })
          return data
        })
        .catch((err) => {
          if (err.response.status === 401) {
            // jwt exists and has expired - run logout to destroy jwt and reset 'Authorization' header in axios
            dispatch(userActions.logout())
          } else {
            dispatch(errorsActions.add(err))
          }
          throw err
        })
    })
  },
  addToCart: (id, data) => (dispatch) => {
    dispatch({
      type: constants.ADD_TO_CART,
      payload: addToCart(id, data)
        .catch((err) => {
          dispatch(errorsActions.add(err))
          throw err
        })
    })
  }
}

// Reducer
export const defaultState = []

export default function (state = defaultState, action) {
  switch (action.type) {
    case resolve(constants.GET_CART):
      return action.payload.data.cart.products
    case reject(constants.GET_CART):
      return []
    case resolve(constants.ADD_TO_CART):
      return action.payload.data.cart.products
    case reject(constants.ADD_TO_CART):
      return []
    case userConstants.LOGOUT:
      return []
    default:
      return state
  }
}
