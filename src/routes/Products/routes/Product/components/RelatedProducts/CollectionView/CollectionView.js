import React, { PropTypes } from 'react'
import './CollectionView.scss'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import ProductCard from 'components/ProductCard'

const propTypes = {
  collection: PropTypes.array,
  col: PropTypes.number,
  row: PropTypes.number
}

export const CollectionView = ({ collection, col, row }) => (
  <div className='collection-view'>
    <Row>
      {
        collection
          .slice(0, col * row)
          .map((item) => (
            <Col sm={6} md={4} lg={3} key={item._id} className='related-products__product-card'>
              <ProductCard product={item} />
            </Col>
          ))
      }
    </Row>
  </div>
)

CollectionView.propTypes = propTypes
export default CollectionView

