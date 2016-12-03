import React from 'react'
import './QuantityInput.scss'
import { Field } from 'redux-form'
import QuantityField from '../QuantityField'

export const QuantityInput = () => (
  <Field
    name='quantity'
    component={QuantityField}
    normalize={(value, prevValue) => ((value > 0) && (value <= 100) ? value : prevValue)}
  />
)

export default QuantityInput
