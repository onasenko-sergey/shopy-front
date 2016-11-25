import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount () {
      const { isAuthorized, router } = this.props
      if (!isAuthorized) {
        router.push('/')
      }
    }

    componentWillReceiveProps (nextProps) {
      const { isAuthorized, router } = nextProps
      if (!isAuthorized) {
        router.push('/')
      }
    }

    render () {
      const { isAuthorized } = this.props
      if (!isAuthorized) return null
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  Authentication.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    router: PropTypes.object.isRequired
  }

  return connect(
    ({ user: { isAuthorized } }) => ({ isAuthorized })
  )(withRouter(Authentication))
}
