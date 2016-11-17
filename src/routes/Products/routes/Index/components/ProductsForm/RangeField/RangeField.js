import React, { Component, PropTypes } from 'react'
import './RangeField.scss'

const propTypes = {
  className: PropTypes.string,
  legend: PropTypes.node,
  range: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired
}

class RangeField extends Component {
  constructor (props) {
    super(props)

    this.handleRangeChange = this.handleRangeChange.bind(this)
    this.handleMinChange = this.handleMinChange.bind(this)
    this.handleMaxChange = this.handleMaxChange.bind(this)
  }

  handleChange (newRange) {
    const { range: { min, max }, input: { onChange } } = this.props
    onChange({
      min: newRange.min > min ? newRange.min : min,
      max: newRange.max < max ? newRange.max : max
    })
  }

  handleRangeChange (event) {
    let { range, input: { value } } = this.props
    if (!value) { value = range }
    const { min, max } = value
    let { value: newVal } = event.target
    newVal = parseFloat(newVal)
    // find closest range limit and update
    if (Math.abs(newVal - min) < Math.abs(newVal - max)) {
      this.handleChange({ min: newVal, max })
    } else if (Math.abs(newVal - min) > Math.abs(newVal - max)) {
      this.handleChange({ min, max: newVal })
    } else if (newVal < min) {
      this.handleChange({ min: newVal, max })
    } else {
      this.handleChange({ min, max: newVal })
    }
  }

  handleMinChange (event) {
    let { range, input: { value } } = this.props
    if (!value) { value = range }
    const { max } = value
    let { value: newVal } = event.target
    newVal = parseFloat(newVal)
    if (newVal > max) {
      this.handleChange({ min: max, max: newVal })
      this.refs.max.focus()
    } else {
      this.handleChange({ min: newVal, max })
    }
  }

  handleMaxChange (event) {
    let { range, input: { value } } = this.props
    if (!value) { value = range }
    const { min } = value
    let { value: newVal } = event.target
    newVal = parseFloat(newVal)
    if (newVal < min) {
      this.handleChange({ min: newVal, max: min })
      this.refs.min.focus()
    } else {
      this.handleChange({ min, max: newVal })
    }
  }

  render () {
    let { legend, range, input: { value }, className } = this.props
    // use default range if initial value is not set
    if (!value) { value = range }
    // calculate marked part of interval params
    let interval = (value.max - value.min) / (range.max - range.min)
    interval = interval || 0.001
    const offsetLeft = value.min / (range.max - range.min)
    return (
      <fieldset className={['range-field', className].join(' ')}>
        {legend && <legend className='range-field__legend'>{legend}</legend>}
        <div className='range-field__range-wrapper'>
          <div
            className='range-field__interval'
            style={{ transform: `translateX(${offsetLeft * 100}%) scaleX(${interval})` }}
          >
            <span
              className='range-field__interval-min'
              style={{ transform: `scaleX(${1 / interval})` }}
              data-val={value.min}
            />
            <span
              className='range-field__interval-max'
              style={{ transform: `scaleX(${1 / interval})` }}
              data-val={value.max}
            />
          </div>
          <input
            className='range-field__range'
            type='range'
            min={range.min}
            max={range.max}
            defaultValue={range.min}
            step={range.step || 1}
            onChange={this.handleRangeChange}
          />
        </div>
        <label className='range-field__input-min'>
          <span className='range-field__input-label'>From</span>
          <input
            type='number'
            className='range-field__input'
            min={range.min}
            max={range.max}
            value={parseInt(value.min)}
            onChange={this.handleMinChange}
            ref='min'
          />
        </label>
        <label className='range-field__input-max'>
          <span className='range-field__input-label'>To</span>
          <input
            type='number'
            className='range-field__input'
            min={range.min}
            max={range.max}
            value={parseInt(value.max)}
            onChange={this.handleMaxChange}
            ref='max'
          />
        </label>
      </fieldset>
    )
  }
}

RangeField.propTypes = propTypes
export default RangeField
