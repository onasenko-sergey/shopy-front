import React, { Component, PropTypes } from 'react'
import './CollectionView.scss'
import ProductCard from 'components/ProductCard'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

// props are not required because they will not be passed directly, but into cloned element
const propTypes = {
  collection: PropTypes.array,
  col: PropTypes.number,
  row: PropTypes.number,
  quantity: PropTypes.number,
  addRows: PropTypes.func,
  lastProduct: PropTypes.bool,
  getMoreProducts: PropTypes.func
}

class CollectionView extends Component {
  componentWillReceiveProps (nextProps) {
    // if loaded products collection ends up - try to load more if last product for this params was not loaded
    const { collection, quantity, getMoreProducts } = this.props
    if ((nextProps.collection.length === nextProps.quantity) &&
      (collection.length !== quantity) &&
      !nextProps.lastProduct) {
      getMoreProducts()
    }
  }

  render () {
    const { collection, col, row, quantity, addRows, lastProduct } = this.props
    return (
      <div className='products-collection'>
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
          hidden={(collection.length === quantity) && lastProduct}
          className='products-collection__more-btn'
        >
          <span className='products-collection__ellipsis' />
        </Button>
      </div>
    )
  }
}

CollectionView.propTypes = propTypes
export default CollectionView
