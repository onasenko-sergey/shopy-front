import React, { PropTypes } from 'react'
import './QuantityInput.scss'
import { Field } from 'redux-form'

export const Input = ({ input: { onChange, value } }) => {
  value = (value > 0) ? value : 0
  return (
    <span>
      <button type='button' className='quantity-input__button' onClick={() => onChange(value + 1)}>+</button>
      <span className='quantity-input__value'>{value}</span>
      <button type='button' className='quantity-input__button'
        onClick={() => onChange((value - 1 > 0) ? value - 1 : 0)}>-</button>
    </span>
  )
}
Input.propTypes = {
  input: PropTypes.object.isRequired
}

export const QuantityInput = () => (
  <span className='quantity-input'>
    <Field name='quantity' component={Input} />
  </span>
)

export default QuantityInput
