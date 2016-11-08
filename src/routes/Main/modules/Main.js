import { getCarouselProducts, getNewArrivals, getSaleProduct, getBestSales } from 'utils/backendAPI'
import { reject, resolve } from 'redux-promised'
import { actions as errorsActions } from 'redux/modules/Errors'

// Constants
export const constants = {
  GET_PRODUCTS: 'GET_PRODUCTS'
}

// Actions
let initiated

function init (initOnce) {
  if (initOnce && initiated) return { type: null }
  initiated = true
  return (dispatch) => {
    dispatch({
      type: constants.GET_PRODUCTS,
      payload: {
        promise: getCarouselProducts().catch((err) => {
          dispatch(errorsActions.add(err))
          throw err
        }),
        key: 'carouselProducts'
      }
    })
    dispatch({
      type: constants.GET_PRODUCTS,
      payload: {
        promise: getNewArrivals().catch((err) => {
          dispatch(errorsActions.add(err))
          throw err
        }),
        key: 'newArrivals'
      }
    })
    dispatch({
      type: constants.GET_PRODUCTS,
      payload: {
        promise: getSaleProduct().catch((err) => {
          dispatch(errorsActions.add(err))
          throw err
        }),
        key: 'saleProduct'
      }
    })
    dispatch({
      type: constants.GET_PRODUCTS,
      payload: {
        promise: getBestSales().catch((err) => {
          dispatch(errorsActions.add(err))
          throw err
        }),
        key: 'bestSales'
      }
    })
  }
}

export const actions = {
  init
}

// Action Handlers
const ACTION_HANDLERS = {
  [resolve(constants.GET_PRODUCTS)]: (state, action) => ({
    ...state,
    [action.meta.originalPayload.key]: action.payload.data.products
  }),
  [reject(constants.GET_PRODUCTS)]: (state, action) => ({
    ...state,
    [action.meta.originalPayload.key]: []
  })
}

// Reducer
const defaultState = {
  carouselProducts: [],
  newArrivals: [],
  saleProduct: [],
  bestSales: []
}

export default function mainReducer (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
