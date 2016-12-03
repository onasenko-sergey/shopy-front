import React, { PropTypes } from 'react'
import './RadioGroup.scss'
import RadioField from '../RadioField'

const propTypes = {
  legend: PropTypes.node,
  className: PropTypes.string,
  fields: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export const RadioGroup = ({
  className,
  legend,
  fields,
  input: { name, value, onChange },
  meta: { touched, error }
}) => (
  <fieldset className={['radio-group', className].join(' ')}>
    {legend && <legend className='radio-group__legend'>{legend}</legend>}
    <div className='radio-group__fields'>
      {
        fields.map((field, i) => (
          <RadioField
            key={i}
            label={field.label}
            input={{
              name,
              value: field.value.toString(),
              checked: field.value.toString() === value,
              onChange
            }}
          />
        ))
      }
    </div>
    {touched && (error && <span className='radio-group__error'>{error}</span>)}
  </fieldset>
)

RadioGroup.propTypes = propTypes
export default RadioGroup
