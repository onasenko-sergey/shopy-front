import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../modules/Product'
import pageProducts from 'redux/selectors/pageProducts'
import { actions as cartActions } from 'redux/modules/Cart'

import Product from '../components/Product'

const mapStateToProps = (state) => ({
  product: (pageProducts('product_page', 'product')(state))[0],
  relatedProducts: pageProducts('product_page', 'relatedProducts')(state),
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
  cartActions: bindActionCreators(cartActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
