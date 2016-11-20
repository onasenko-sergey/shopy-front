import React, { PropTypes } from 'react'
import './ProductCard.scss'
import Icons from 'components/Icons'
import { Link } from 'react-router'

/**
 * Convert sizes notation in form of array to string
 * @param {number[]}s
 * @returns {string|*}
 */
export const sizes = (s) => {
  return s.map((size) => {
    switch (size) {
      case 0:
        return 'xs'
      case 1:
        return 's'
      case 2:
        return 'm'
      case 3:
        return 'l'
      case 4:
        return 'xl'
    }
  })
    .join(' - ')
}

/**
 * Convert colors notation in form of array of numbers to array of span elements
 * with background representing each color.
 * @param {number[]} c
 * @returns {array}
 */
export const colors = (c) => {
  return c.map((color, i) => {
    const style = {
      backgroundColor: color
    }
    return (
      <span style={style} key={i} />
    )
  })
}

const propTypes = {
  product: PropTypes.object.isRequired
}

export const ProductCard = ({ product }) => (
  <Link to={'/products/' + product._id} title={product.brand + ' ' + product.name} className='product-card'>
    <div className='product-card__wrapper'>
      <div className='product-card__image-container'>
        <img src={product.images[0]} alt={product.name} className='product-card__image' />
      </div>
      <h3 className='product-card__name'>
        {product.brand + ' ' + product.name}
      </h3>
      <p className='product-card__price'>{Math.round(product.price)}$</p>
      <div className='product-card__bottom-panel'>
        <p className='product-card__sizes'>sizes &nbsp;&nbsp; : &nbsp;&nbsp; {sizes(product.sizes)}</p>
        <p className='product-card__colors'>{colors(product.colors)}</p>
        <object>
          <ul className='list-inline'>
            <li className='product-card__icon-btn'><a href=''><Icons.Share /></a></li>
            <li><a href=''><Icons.AddToCart highlighted /></a></li>
            <li><a href=''><Icons.Like /></a></li>
          </ul>
        </object>
      </div>
    </div>
  </Link>
)

ProductCard.propTypes = propTypes
export default ProductCard
