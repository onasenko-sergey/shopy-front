import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { actions } from '../modules/Cart'

import Cart from '../components/Cart'

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
