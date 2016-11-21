import { reduxForm } from 'redux-form'
import Products from '../components/ProductsForm'
import { after, debounce } from 'lodash'

// after corresponds to initial values adjustment
// debounce form change event and run form onChange callback

const formChangeHandler = after(2, debounce(cb => (cb()), 1000))

const validate = (values, props) => {
  formChangeHandler(() => { props.onSubmit(values) })
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
  }
})(Products)

export default ProductsForm
