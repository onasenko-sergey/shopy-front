import { reduxForm } from 'redux-form'
import Products from 'routes/Products/routes/Index/components/ProductsForm'

const validate = (values) => {
  const errors = {}
  return errors
}

const ProductsForm = reduxForm({
  form: 'Products',
  validate
})(Products)

export default ProductsForm
