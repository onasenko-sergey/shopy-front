import React, { PropTypes } from 'react'
import './ProductCard2.scss'
import { Link } from 'react-router'
import Icons from 'components/Icons'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

const propTypes = {
  product: PropTypes.object.isRequired
}

export const ProductCard2 = ({ product }) => {
  const stars = []
  const r = Math.round(Math.random() * 3 + 2)
  for (let i = 0; i < 5; i++) {
    if (i < r) {
      stars.push(<Icons.Star highlighted key={i} />)
    } else {
      stars.push(<Icons.Star key={i} />)
    }
  }
  return (
    <div className='product-card2'>
      <Row>
        <Col sm={5}>
          <div className='product-card2__image-container'>
            <img src={product.images[0]} alt={product.name} className='product-card2__image' />
          </div>
        </Col>
        <Col sm={7} className='product-card2__info'>
          <h3 className='product-card2__name'>
            <Link to={'/products/' + product._id}>
              {product.brand + ' ' + product.name}
            </Link>
          </h3>
          <div className='product-card2__frame1 clearfix'>
            <div className='product-card2__stars'>{stars}</div>
            <div className='product-card2__price'>{Math.round(product.price)}$</div>
          </div>
          <div className='product-card2__frame2'>
            <a href='' className='product-card2__order'><Icons.AddToCart highlighted />add to cart</a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

ProductCard2.propTypes = propTypes
export default ProductCard2
