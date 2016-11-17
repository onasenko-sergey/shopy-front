import React, { Component, PropTypes } from 'react'
import './CheckboxGroup.scss'
import CheckboxField from '../CheckboxField'

const propTypes = {
  legend: PropTypes.node,
  className: PropTypes.string,
  fields: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired
}

class CheckboxGroup extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { value: prevValue, onChange } = this.props.input
    const newValue = [...prevValue]
    const { value } = event.target
    const valueIndex = newValue.indexOf(value)
    if (valueIndex === -1) {
      newValue.push(value)
    } else {
      newValue.splice(valueIndex, 1)
    }
    return onChange(newValue)
  }

  renderFields () {
    const { fields } = this.props
    const { name, value } = this.props.input
    return fields.map((field, i) => {
      return (
        <CheckboxField
          key={i}
          label={field.label}
          input={{
            name: name,
            value: field.value.toString(),
            checked: value.indexOf(field.value.toString()) !== -1,
            onChange: this.handleChange
          }}
        />
      )
    })
  }

  render () {
    const { className, legend } = this.props
    return (
      <fieldset className={['checkbox-group', className].join(' ')}>
        {legend && <legend className='checkbox-group__legend'>{legend}</legend>}
        {this.renderFields()}
      </fieldset>
    )
  }
}

CheckboxGroup.propTypes = propTypes
export default CheckboxGroup
