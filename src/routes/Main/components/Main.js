import React, { Component, PropTypes } from 'react'
import './Main.scss'
import Carousel from './Carousel'
import NewArrivals from '../containers/NewArrivals'

const propTypes = {
  init: PropTypes.func.isRequired,
  carouselProducts: PropTypes.array.isRequired,
  newArrivalsProducts: PropTypes.array.isRequired
}

class Main extends Component {
  componentWillMount () {
    const { init } = this.props
    init(true)
  }

  render () {
    const { carouselProducts, newArrivalsProducts } = this.props
    return (
      <div>
        <Carousel products={carouselProducts} />
        <NewArrivals products={newArrivalsProducts} />
      </div>
    )
  }
}

Main.propTypes = propTypes
export default Main
