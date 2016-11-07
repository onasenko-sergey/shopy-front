import React, { Component, PropTypes } from 'react'
import './Main.scss'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Carousel from './Carousel'
import NewArrivals from '../containers/NewArrivals'
import Sale from './Sale'
import Advertisement from './Advertisement'
import BestSales from './BestSales'

const propTypes = {
  init: PropTypes.func.isRequired,
  carouselProducts: PropTypes.array.isRequired,
  newArrivalsProducts: PropTypes.array.isRequired,
  saleProducts: PropTypes.array.isRequired,
  bestSalesProducts: PropTypes.array.isRequired
}

class Main extends Component {
  componentWillMount () {
    const { init } = this.props
    init(true)
  }

  render () {
    const { carouselProducts, newArrivalsProducts, saleProducts, bestSalesProducts } = this.props
    return (
      <div>
        <Carousel products={carouselProducts} />
        <NewArrivals products={newArrivalsProducts} />
        <Grid>
          <Row>
            <Col md={7}>
              <Sale products={saleProducts} />
            </Col>
            <Col md={5}>
              <Advertisement />
            </Col>
          </Row>
        </Grid>
        <BestSales products={bestSalesProducts} />
      </div>
    )
  }
}

Main.propTypes = propTypes
export default Main
