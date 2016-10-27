export default {
  path: 'redirect',
  onEnter: (nextRoute) => {
    // missing render component required by CoreLayout may cause runtime error
    // but it's not critical
    const { error, error_reason, error_description, code } = nextRoute.location.query
    if (error) {
      return window.opener.postMessage({ error, error_reason, error_description }, window.location.origin)
    }
    if (code && window.opener && window.opener.location.origin === window.location.origin) {
      window.opener.postMessage({ code }, window.location.origin)
    }
  }
}
