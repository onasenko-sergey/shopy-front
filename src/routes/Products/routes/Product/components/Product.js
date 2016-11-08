import React, { PropTypes } from 'react'
import './Product.scss'

const propTypes = {
  params: PropTypes.object.isRequired
}

export const Product = ({ params }) => (
  <div className='product'>
    <h4>Product: {params.id}</h4>
  </div>
)

Product.propTypes = propTypes
export default Product
