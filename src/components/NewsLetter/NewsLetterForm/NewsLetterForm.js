import React, { PropTypes } from 'react'
import './NewsLetterForm.scss'
import { Field } from 'redux-form'
import Button from 'react-bootstrap/lib/Button'
import MailInput from './MailInput'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string
}

export const NewsLetterForm = ({ handleSubmit, className }) => (
  <form onSubmit={handleSubmit} className={`${className} nl-form`}>
    <Button type='submit' className='nl-form__btn-submit'>join us</Button>
    <Field name='email' component={MailInput} className='nl-form__field' />
  </form>
)

NewsLetterForm.propTypes = propTypes
export default NewsLetterForm
