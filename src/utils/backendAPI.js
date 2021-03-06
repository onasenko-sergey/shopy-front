import axios from 'axios'

var backend = axios.create({
  baseURL: 'http://localhost:8000'
})
backend.defaults.headers = {
  common: {},
  get: {},
  post: {}
}

export function setAuthHeader (authToken) {
  backend.defaults.headers.common['Authorization'] = 'JWT ' + authToken
}

export function resetAuthHeader () {
  if (backend.defaults.headers.common['Authorization']) {
    delete backend.defaults.headers.common['Authorization']
  }
}

export function authVk (code, redirectUri) {
  return backend.post('/auth/vk', { code, redirect_uri: redirectUri })
}

export function getCarouselProducts () {
  return backend.get('/products/carousel')
}

export function getNewArrivals () {
  return backend.get('/products/new-arrivals')
}

export function getSaleProduct () {
  return backend.get('/products/sale')
}

export function getBestSales () {
  return backend.get('/products/best-sales')
}

export function getProduct (id) {
  return backend.get('/products/' + id)
}

export function getRelatedProducts (id) {
  return backend.get('/products/' + id + '/related')
}

export function getProducts (data) {
  const body = {}
  if (data) {
    const { categories, price, sizes, brands, page } = data
    // format request data
    if (categories) {
      if (categories.length === 1) {
        body.categories = categories[0]
      }
      if (categories.length > 1) {
        body.categories = categories
      }
    }
    if (price) {
      if (price.min != null) {
        body.priceMin = price.min
      }
      if (price.max) {
        body.priceMax = price.max
      }
    }
    if (sizes) {
      if (sizes.length === 1) {
        body.sizes = sizes[0]
      }
      if (sizes.length > 1) {
        body.sizes = sizes
      }
    }
    if (brands) {
      if (brands.length === 1) {
        body.brands = brands[0]
      }
      if (brands.length > 1) {
        body.brands = brands
      }
    }
    if (page) {
      body.page = page
    }
  }
  return backend.post('/products', body)
}

export function getProfile () {
  return backend.get('/auth/profile')
}

export function getCart () {
  return backend.get('/cart')
}

export function addToCart (id, data) {
  return backend.post('/cart/products/' + id, data)
}

export function removeFromCart (id) {
  return backend.delete('/cart/products/' + id)
}

export function updateCartItem (id, data) {
  return backend.patch('/cart/products/' + id, data)
}
