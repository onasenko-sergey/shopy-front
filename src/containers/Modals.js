import { connect } from 'react-redux'
import Modals from 'components/Modals'

const mapStateToProps = (state) => {
  return {
    ...state.modals
  }
}

export default connect(
  mapStateToProps
)(Modals)
