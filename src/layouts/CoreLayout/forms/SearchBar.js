import { reduxForm } from 'redux-form'
import SearchBar from 'layouts/CoreLayout/components/Header/Navbar/SearchBar/SearchBarForm'

const validate = (values) => {
  const errors = {}
  return errors
}

export const SearchBarForm = reduxForm({
  form: 'SearchBar',
  validate
})(SearchBar)

export default SearchBarForm
