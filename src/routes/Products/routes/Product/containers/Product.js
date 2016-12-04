import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../modules/Product'
import pageProducts from 'redux/selectors/pageProducts'
import { actions as cartActions } from 'redux/modules/Cart'
import { actions as userActions } from 'redux/modules/User'

import Product from '../components/Product'

const mapStateToProps = (state) => ({
  product: (pageProducts('product_page', 'product')(state))[0],
  relatedProducts: pageProducts('product_page', 'relatedProducts')(state),
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
  cartActions: bindActionCreators(cartActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
