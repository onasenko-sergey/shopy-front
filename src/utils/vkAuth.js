// external variable prevents multiple popups creation
let popup

/**
 * Call vk authorization api
 * @param {boolean} revoke - show login form even if signed up
 * @param {function} cb - function receives error and auth code + redirect uri if call succeeds
 */
export function callVkAuth ({ revoke, cb }) {
  const url = 'https://oauth.vk.com/authorize'

  const urlParams = [
    'client_id=4945867',
    `redirect_uri=${window.location.origin}/user/redirect`,
    'display=popup',
    'scope=email',
    'response_type=code'
  ]

  let windowTarget = ''

  let windowOptions = [
    'width=500',
    'height=500',
    `left=${(window.innerWidth - 500) / 2}`,
    `top=${(window.innerHeight - 500) / 2}`
  ]

  if (revoke) {
    urlParams.push('revoke=1')
    windowTarget = '_blank'
    windowOptions = []
  }

  // window 'message' event handler
  const messageHandler = function (event) {
    const { error, code } = event.data
    if (error) {
      cb(error)
      popup.close()
    }
    if (code && event.origin === window.location.origin) {
      cb(null, code, window.location.origin + '/user/redirect')
      popup.close()
    }
  }

  // do not create multiple popup windows
  if (popup == null || popup.closed) {
    popup = window.open(url + '?' + urlParams.join('&'), windowTarget, windowOptions.join(','))
    if (cb) {
      window.addEventListener('message', messageHandler)
      // as far as popup window does not provide 'onbeforeunload' event due to same origin policy
      // remove event listener manually with timer
      let timer = setInterval(function () {
        if (popup.closed) {
          window.removeEventListener('message', messageHandler)
          clearInterval(timer)
        }
      }, 1000)
    }
  }
  popup.focus()
}

export function getVkAuthPromise ({ revoke }) {
  return new Promise((resolve, reject) => {
    callVkAuth({ revoke,
      cb: (err, code, redirectUri) => {
        if (err) {
          reject(err)
        }
        resolve({ code, redirectUri })
      }
    })
  })
}
