import React, { Component, PropTypes } from 'react'
import './Index.scss'
import Section from 'components/Section'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import ProductsForm from '../forms/Products'
import ProductsCollection from '../containers/ProductsCollection'

const propTypes = {
  init: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired
}

class Index extends Component {
  componentWillMount () {
    const { init } = this.props
    init(true)
  }

  render () {
    const { products, getProducts } = this.props
    return (
      <Section className='products-page'>
        <Grid>
          <Row>
            <Col md={4} lg={3} className='products-page__filters'>
              <ProductsForm onSubmit={getProducts} />
            </Col>
            <Col md={8} lg={9} className='products-page__collection'>
              <ProductsCollection products={products} />
            </Col>
          </Row>
        </Grid>
      </Section>
    )
  }
}

Index.propTypes = propTypes
export default Index
