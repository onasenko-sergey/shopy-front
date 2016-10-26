import { connect } from 'react-redux'
import { actions } from 'redux/modules/Errors'
import Errors from 'components/Errors'

const mapStateToProps = ({ errors }) => {
  return {
    errors
  }
}

export default connect(
  mapStateToProps,
  actions
)(Errors)
