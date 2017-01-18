import { reduxForm, formValueSelector } from 'redux-form'
import Order from 'components/ProductOrder/OrderForm'
import { connect } from 'react-redux'

const validate = (values) => {
  const errors = {}
  if (!values.size) {
    errors.size = 'size is required'
  }
  return errors
}

const selector = formValueSelector('Order')

let OrderForm = reduxForm({
  form: 'Order',
  validate
})(Order)

OrderForm = connect(
  state => ({
    size: selector(state, 'size')
  })
)(OrderForm)

export default OrderForm
