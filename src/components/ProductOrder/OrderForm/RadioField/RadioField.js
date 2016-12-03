import React, { PropTypes } from 'react'
import './RadioField.scss'

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired
}

export const RadioField = ({ label, input }) => (
  <label className='radio-field'>
    <input
      className='radio-field__input'
      type='radio'
      {...input}
    />
    <span className='radio-field__label'>{label}</span>
  </label>
)

RadioField.propTypes = propTypes
export default RadioField
