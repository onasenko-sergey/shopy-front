import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actions } from '../modules/Main'
import carouselProducts from '../selectors/carouselProducts'

import Main from '../components/Main'

/* eslint-disable camelcase */
const mapStateToProps = (state) => ({
  carouselProducts: carouselProducts(state)
})
/* eslint-enable camelcase */

// const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, actions)(Main)
