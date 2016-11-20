import { reduxForm } from 'redux-form'
import NewsLetter from 'layouts/CoreLayout/components/NewsLetter/NewsLetterForm'

const validate = (values) => {
  const errors = {}
  return errors
}

const NewsLetterForm = reduxForm({
  form: 'NewsLetter',
  validate
})(NewsLetter)

export default NewsLetterForm
