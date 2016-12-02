import React, { Component, PropTypes } from 'react'
import { applyRouterMiddleware, browserHistory, Router } from 'react-router'
import { useScroll } from 'react-router-scroll'
import { Provider } from 'react-redux'
import { actions as userActions } from 'redux/modules/User'

class AppContainer extends Component {
  static propTypes = {
    routes: React.PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired,
    store  : PropTypes.object.isRequired
  }

  componentWillMount () {
    const { store } = this.props
    store.dispatch(userActions.init())
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} render={applyRouterMiddleware(useScroll())} />
      </Provider>
    )
  }
}

export default AppContainer
