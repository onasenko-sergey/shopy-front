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
  return backend.post('/products', data)
}
