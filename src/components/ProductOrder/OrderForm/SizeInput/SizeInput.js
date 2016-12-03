import React, { PropTypes } from 'react'
import './SizeInput.scss'
import RadioGroup from '../RadioGroup'
import { Field } from 'redux-form'

const propTypes = {
  sizes: PropTypes.array.isRequired
}

export const SizeInput = ({ sizes }) => {
  const labels = ['xs', 's', 'm', 'l', 'xl']
  const fields = sizes.map((size) => ({
    label: labels[size],
    value: size
  }))
  return (
    <Field
      name='size'
      legend='Choose size'
      component={RadioGroup}
      fields={fields}
    />
  )
}

SizeInput.propTypes = propTypes
export default SizeInput
