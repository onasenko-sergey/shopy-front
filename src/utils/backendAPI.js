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
