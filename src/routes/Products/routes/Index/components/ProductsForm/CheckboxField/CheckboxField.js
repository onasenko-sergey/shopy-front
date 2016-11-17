import React, { PropTypes } from 'react'
import './CheckboxField.scss'

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired
}

export const CheckboxField = ({ label, input }) => (
  <label className='checkbox-field'>
    <input
      className='checkbox-field__input'
      type='checkbox'
      {...input}
    />
    <span className='checkbox-field__label'>{label}</span>
  </label>
)

CheckboxField.propTypes = propTypes
export default CheckboxField
