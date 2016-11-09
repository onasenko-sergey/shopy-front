import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actions } from '../modules/Product'
import pageProducts from 'redux/selectors/pageProducts'

import Product from '../components/Product'

const mapStateToProps = (state) => ({
  product: (pageProducts('product_page', 'product')(state))[0],
  relatedProducts: pageProducts('product_page', 'relatedProducts')(state)
})

export default connect(mapStateToProps, actions)(Product)
