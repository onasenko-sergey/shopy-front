import React, { PropTypes } from 'react'
import { Field } from 'redux-form'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

const SearchBarForm = ({ handleSubmit, reset, onReset }) => {
  const handleReset = () => {
    onReset()
    reset()
  }
  return (
    <form role='search' onSubmit={handleSubmit}>
      <div className='form-group'>
        <div className='input-group'>
          <a className='input-group-addon' onClick={handleReset}>x</a>
          <Field name='search' component='input' type='text' placeholder='Search' className='form-control' />
        </div>
      </div>
    </form>
  )
}

SearchBarForm.propTypes = propTypes
export default SearchBarForm
