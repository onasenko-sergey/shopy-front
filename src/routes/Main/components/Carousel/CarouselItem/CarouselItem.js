import React, { PropTypes } from 'react'
import './CarouselItem.scss'
import Icons from 'components/Icons'
import Button from 'react-bootstrap/lib/Button'

const propTypes = {
  product: PropTypes.object.isRequired
}

export const CarouselItem = ({ product }) => (
  <div className='carousel-item'>
    <h3 className='carousel-item__headline'>{product.name}</h3>
    <p className='carousel-item__subtitle'>{product.comprise}</p>
    <p className='carousel-item__description'>{product.description}</p>
    <p className='carousel-item__price'>Price: {Math.round(product.price)}$</p>
    <Button bsStyle='link' className='carousel-item__orderButton'>
      <Icons.Cart highlighted />
      Order now
    </Button>
  </div>
)

CarouselItem.propTypes = propTypes
export default CarouselItem
