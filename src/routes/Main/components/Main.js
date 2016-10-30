import React, { Component, PropTypes } from 'react'
import './Main.scss'
import Carousel from './Carousel'

const propTypes = {
  init: PropTypes.func.isRequired,
  carouselProducts: PropTypes.array.isRequired
}

class Main extends Component {
  componentWillMount () {
    const { init } = this.props
    init(true)
  }

  render () {
    const { carouselProducts } = this.props
    return (
      <div>
        <Carousel products={carouselProducts} />
      </div>
    )
  }
}

Main.propTypes = propTypes
export default Main
