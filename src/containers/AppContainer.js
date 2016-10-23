import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends Component {
  static propTypes = {
    routes: React.PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    )
  }
}

export default AppContainer
