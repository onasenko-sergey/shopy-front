import { getProducts as backendGetProducts } from 'utils/backendAPI'
import { reject, resolve } from 'redux-promised'
import { actions as errorsActions } from 'redux/modules/Errors'

// Constants
export const constants = {
  GET_PRODUCTS: 'products_page.GET_PRODUCTS'
}

const getProducts = data => dispatch => {
  dispatch({
    type: constants.GET_PRODUCTS,
    payload: backendGetProducts(data).catch((err) => {
      dispatch(errorsActions.add(err))
      throw err
    })
  })
}

let initiated

const init = (initOnce) => {
  if (initOnce && initiated) return { type: null }
  return getProducts()
}

// Actions
export const actions = {
  init,
  getProducts
}

// Action Handlers
// const ACTION_HANDLERS = {
//   [constants.]: (state, action) => {}
// }

// Reducer
const defaultState = {
  products: []
}

// export default function(state = defaultState , action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }

export default function (state = defaultState, action) {
  switch (action.type) {
    case resolve(constants.GET_PRODUCTS):
      return {
        ...state,
        products: action.payload.data.products
      }
    case reject(constants.GET_PRODUCTS):
      return {
        ...state,
        products: []
      }
    default:
      return state
  }
}
