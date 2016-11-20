import React, { Component, PropTypes } from 'react'
import './ProductsCollection.scss'
import CollectionGrid from 'containers/CollectionGrid'
import ProductCard from 'components/ProductCard'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

const propTypes = {
  products: PropTypes.array.isRequired,
  btnMoreHidden: PropTypes.bool.isRequired,
  onComplete: PropTypes.func
}

class ProductsCollection extends Component {
  constructor (props) {
    super(props)

    this.handleMoreClick = this.handleMoreClick.bind(this)
  }

  handleMoreClick () {
    this._collection.addRows(2)
  }

  render () {
    const { products, btnMoreHidden, onComplete } = this.props
    if (!products.length) return null
    return (
      <div className='products-collection'>
        <Row>
          <CollectionGrid
            ref={(collection) => { this._collection = collection }}
            collection={products}
            gridMap={{
              '0': { col: 1, row: 3 },
              '768': { col: 2, row: 3 },
              '1200': { col: 3, row: 3 }
            }}
            component={(item, key) => (
              <Col sm={6} lg={4} key={key} className='products-collection__product-card'>
                <ProductCard product={item} />
              </Col>
            )}
            onComplete={onComplete}
          />
        </Row>
        <Button
          onClick={this.handleMoreClick}
          hidden={btnMoreHidden}
          className='products-collection__more-btn'
        >
          <span className='products-collection__ellipsis' />
        </Button>
      </div>

    )
  }
}

ProductsCollection.propTypes = propTypes
export default ProductsCollection
