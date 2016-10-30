import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actions } from '../modules/Main'

import Main from '../components/Main'

/* eslint-disable camelcase */
const mapStateToProps = ({ main_page }) => ({ ...main_page })
/* eslint-enable camelcase */

// const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, actions)(Main)
