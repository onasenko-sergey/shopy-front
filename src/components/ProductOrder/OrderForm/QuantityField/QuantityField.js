import React, { PropTypes } from 'react'
import './QuantityField.scss'

const propTypes = {
  input: PropTypes.object.isRequired,
  className: PropTypes.string
}

export const QuantityField = ({ input: { onChange, value }, className }) => (
  <fieldset className={['quantity-field', className].join(' ')}>
    <legend className='quantity-field__legend'>Choose quantity</legend>
    <button
      type='button'
      className='quantity-field__button'
      onClick={() => onChange(value + 1)}
    >+</button>
    <span className='quantity-field__value'>{value}</span>
    <button
      type='button'
      className='quantity-field__button'
      onClick={() => onChange(value - 1)}
    >-</button>
  </fieldset>
)

QuantityField.propTypes = propTypes
export default QuantityField
