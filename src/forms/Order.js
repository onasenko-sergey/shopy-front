import { reduxForm } from 'redux-form'
import Order from 'components/ProductOrder/OrderForm'

const validate = (values) => {
  const errors = {}
  return errors
}

export const OrderForm = reduxForm({
  form: 'Order',
  validate
})(Order)

export default OrderForm
