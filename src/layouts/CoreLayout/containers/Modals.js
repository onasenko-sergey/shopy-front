import { connect } from 'react-redux'
import Modals from '../components/Modals'

const mapStateToProps = ({ core_layout: { modals } }) => {
  return {
    ...modals
  }
}

export default connect(
  mapStateToProps
)(Modals)
