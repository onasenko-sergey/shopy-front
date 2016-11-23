import { reduxForm } from 'redux-form'
import Products from '../components/ProductsForm'

const validate = (values, props) => {
  const errors = {}
  return errors
}

const ProductsForm = reduxForm({
  form: 'Products',
  validate,
  initialValues: {
    categories: [],
    price: { min: 0, max: 1000 },
    sizes: [],
    brands: []
  },
  destroyOnUnmount: false
})(Products)

export default ProductsForm
