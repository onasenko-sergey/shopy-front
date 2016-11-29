import React, { Component, PropTypes } from 'react'
import './Index.scss'
import Section from 'components/Section'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import ProductsForm from '../forms/Products'
import ProductsCollection from './ProductsCollection'

const propTypes = {
  init: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  lastProduct: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  getMoreProducts: PropTypes.func.isRequired
}

class Index extends Component {
  componentWillMount () {
    const { init } = this.props
    init(true)
  }

  render () {
    const { products, lastProduct, getProducts, getMoreProducts } = this.props
    return (
      <Section className='products-page'>
        <Grid>
          <Row>
            <Col md={4} lg={3} className='products-page__filters'>
              <ProductsForm
                onSubmit={(values) => {
                  getProducts(values)
                  this.refs.collection.getCollectionGridInstance().reset()
                }}
              />
            </Col>
            <Col md={8} lg={9} className='products-page__collection'>
              <ProductsCollection
                collection={products}
                lastProduct={lastProduct}
                getMoreProducts={getMoreProducts}
                withRef
                ref='collection'
              />
            </Col>
          </Row>
        </Grid>
      </Section>
    )
  }
}

Index.propTypes = propTypes
export default Index
