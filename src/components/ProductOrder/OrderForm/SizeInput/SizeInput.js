import React, { PropTypes } from 'react'
import './SizeInput.scss'
import { Field } from 'redux-form'

const propTypes = {
  sizes: PropTypes.array.isRequired
}

export const SizeInput = ({ sizes }) => {
  const labels = ['xs', 's', 'm', 'l', 'xl']
  const radioGroup = sizes.map((size, i) => (
    <label className='size-input__size' key={i}>
      <Field className='size-input__radio' name='size' component='input' type='radio' value={size.toString()} />
      <span className='size-input__label'>{labels[size]}</span>
      <span className='size-input__hyphen'>&nbsp;-&nbsp;</span>
    </label>
  ))
  return (
    <span className='size-input'>
      {radioGroup}
    </span>
  )
}

SizeInput.propTypes = propTypes
export default SizeInput
