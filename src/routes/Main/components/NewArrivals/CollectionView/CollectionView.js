import React, { PropTypes } from 'react'
import './CollectionView.scss'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import ProductCard from 'components/ProductCard'
import Button from 'react-bootstrap/lib/Button'

const propTypes = {
  collection: PropTypes.array,
  col: PropTypes.number,
  row: PropTypes.number,
  quantity: PropTypes.number,
  addRows: PropTypes.func
}

export const CollectionView = ({ collection, col, row, quantity, addRows }) => (
  <div className='collection-view'>
    <Row>
      {
        collection
          .slice(0, col * row)
          .map((item) => (
            <Col sm={6} md={4} lg={3} key={item._id} className='new-arrivals__product-card'>
              <ProductCard product={item} />
            </Col>
          ))
      }
    </Row>
    <Button
      onClick={() => { addRows() }}
      hidden={collection.length === quantity}
      className='new-arrivals__more-btn'
    >
      <span className='new-arrivals__ellipsis' />
    </Button>
  </div>
)

CollectionView.propTypes = propTypes
export default CollectionView
