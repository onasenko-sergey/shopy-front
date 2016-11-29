import React, { Component, PropTypes } from 'react'
import './ProductsCollection.scss'
import CollectionGridHOC from 'containers/CollectionGridHOC'
import ProductCard from 'components/ProductCard'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

const propTypes = {
  collection: PropTypes.array,
  col: PropTypes.number,
  row: PropTypes.number,
  quantity: PropTypes.number,
  addRows: PropTypes.func,
  lastProduct: PropTypes.bool,
  getMoreProducts: PropTypes.func
}

class ProductsCollection extends Component {
  componentWillUpdate (nextProps) {
    // if all loaded products are displayed - try to load more
    const { collection, quantity, getMoreProducts } = this.props
    if (!nextProps.lastProduct && (nextProps.quantity !== 0) &&
      (nextProps.collection.length === nextProps.quantity) && (collection.length !== quantity)) {
      getMoreProducts()
    }
  }

  render () {
    const { collection, col, row, quantity, addRows, lastProduct } = this.props
    return (
      <div>
        <Row>
          {
            collection
              .slice(0, col * row)
              .map((item) => (
                <Col sm={6} lg={4} key={item._id} className='products-collection__product-card'>
                  <ProductCard product={item} />
                </Col>
              ))
          }
        </Row>
        <Button
          onClick={() => { addRows(2) }}
          hidden={!collection.length || (collection.length === quantity) && lastProduct}
          className='products-collection__more-btn'
        >
          <span className='products-collection__ellipsis' />
        </Button>
      </div>
    )
  }
}

ProductsCollection.propTypes = propTypes
export default CollectionGridHOC({
  gridMap: {
    '0': { col: 1, row: 3 },
    '768': { col: 2, row: 3 },
    '1200': { col: 3, row: 3 }
  }
})(ProductsCollection)
