import { getProducts as backendGetProducts } from 'utils/backendAPI'
import { reject, resolve, request } from 'redux-promised'
import { actions as errorsActions } from 'redux/modules/Errors'

// Constants
export const constants = {
  GET_PRODUCTS: 'products_page.GET_PRODUCTS',
  GET_MORE_PRODUCTS: 'GET_MORE_PRODUCTS'
}

let lastRequestData, page

const getProducts = data => {
  lastRequestData = data
  page = 0
  return dispatch => {
    dispatch({
      type: constants.GET_PRODUCTS,
      payload: backendGetProducts(data).catch((err) => {
        dispatch(errorsActions.add(err))
        throw err
      })
    })
  }
}

const getMoreProducts = () => dispatch => {
  page += 1
  dispatch({
    type: constants.GET_MORE_PRODUCTS,
    payload: backendGetProducts({
      ...lastRequestData,
      page: page
    }).catch((err) => {
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
  getProducts,
  getMoreProducts
}

// Action Handlers
// const ACTION_HANDLERS = {
//   [constants.]: (state, action) => {}
// }

// Reducer
const defaultState = {
  products: [],
  lastProduct: false // collection completly loaded condition
}

// export default function(state = defaultState , action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }

export default function (state = defaultState, action) {
  switch (action.type) {
    case resolve(constants.GET_PRODUCTS): {
      const products = action.payload.data.products
      return {
        ...state,
        products,
        lastProduct: products.length < 10
      }
    }
    case resolve(constants.GET_MORE_PRODUCTS): {
      const products = action.payload.data.products
      return {
        ...state,
        products: [
          ...state.products,
          ...products
        ],
        lastProduct: products.length < 10
      }
    }
    case reject(constants.GET_PRODUCTS):
      return {
        ...state,
        products: []
      }
    case reject(constants.GET_MORE_PRODUCTS):
      return {
        ...state,
        products: []
      }
    // drop products for collection grid(depends on collection length) to reset properly
    case request(constants.GET_PRODUCTS):
      return {
        ...state,
        products: []
      }
    default:
      return state
  }
}
