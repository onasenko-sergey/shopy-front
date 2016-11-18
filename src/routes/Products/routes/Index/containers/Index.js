import { connect } from 'react-redux'
import { actions } from '../modules/Index'
import pageProducts from 'redux/selectors/pageProducts'

import Index from '../components/Index'

const mapStateToProps = (state) => ({
  products: pageProducts('products_page', 'products')(state)
})

export default connect(mapStateToProps, actions)(Index)
