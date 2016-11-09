import { getProduct, getRelatedProducts } from 'utils/backendAPI'
import { reject, resolve } from 'redux-promised'
import { actions as errorsActions } from 'redux/modules/Errors'

// Constants
export const constants = {
  GET_PRODUCT: 'GET_PRODUCT',
  GET_RELATED_PRODUCTS: 'GET_RELATED_PRODUCTS'
}

// Actions
export const actions = {
  init: (id) => {
    return (dispatch, getState) => {
      const { products } = getState()
      const product = products[id]
      if (product) {
        dispatch({
          type: resolve(constants.GET_PRODUCT),
          payload: {
            data: {
              products: [product]
            }
          }
        })
      } else {
        dispatch({
          type: constants.GET_PRODUCT,
          payload: getProduct(id).catch((err) => {
            dispatch(errorsActions.add(err))
            throw err
          })
        })
      }
      dispatch({
        type: constants.GET_RELATED_PRODUCTS,
        payload: getRelatedProducts(id).catch((err) => {
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
  product: [],
  relatedProducts: []
}

// export default function(state = defaultState , action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }

export default function (state = defaultState, action) {
  switch (action.type) {
    case resolve(constants.GET_PRODUCT):
      return {
        ...state,
        product: action.payload.data.products
      }
    case reject(constants.GET_PRODUCT):
      return {
        ...state,
        product: []
      }
    case resolve(constants.GET_RELATED_PRODUCTS):
      return {
        ...state,
        relatedProducts: action.payload.data.products
      }
    case reject(constants.GET_RELATED_PRODUCTS):
      return {
        ...state,
        relatedProducts: []
      }
    default:
      return state
  }
}
