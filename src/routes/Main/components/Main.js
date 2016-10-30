import React, { Component, PropTypes } from 'react'
import './Main.scss'

const propTypes = {
  init: PropTypes.func.isRequired
}

class Main extends Component {
  componentWillMount () {
    const { init } = this.props
    init(true)
  }

  render () {
    return (
      <div className='main'>
        <h4>Main</h4>
      </div>
    )
  }
}

Main.propTypes = propTypes
export default Main
