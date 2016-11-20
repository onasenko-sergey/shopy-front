import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actions } from '../modules/Main'
import pageProducts from 'redux/selectors/pageProducts'

import Main from '../components/Main'

const mapStateToProps = (state) => ({
  carouselProducts: pageProducts('main_page', 'carouselProducts')(state),
  newArrivalsProducts: pageProducts('main_page', 'newArrivals')(state),
  saleProducts: pageProducts('main_page', 'saleProduct')(state),
  bestSalesProducts: pageProducts('main_page', 'bestSales')(state)
})

// const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, actions)(Main)
