// Constants

export const constants = {
  POPULATE_PRODUCTS: 'POPULATE_PRODUCTS'
}

// Action Creators

export const actions = {
  populate: (products) => ({
    type: constants.POPULATE_PRODUCTS,
    payload: products
  })
}

// Reducer

export const defaultState = { }

export default function (state = defaultState, action) {
  switch (action.type) {
    case constants.POPULATE_PRODUCTS:
      const newProducts = action.payload.reduce((collection, product) => {
        collection[product._id] = product
        return collection
      }, {})
      return {
        ...state,
        ...newProducts
      }
    default:
      return state
  }
}
