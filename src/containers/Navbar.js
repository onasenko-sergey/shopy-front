import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navbar from 'components/Header/Navbar'
import { actions as searchBarActions } from 'redux/modules/SearchBar'
import { actions as userActions } from 'redux/modules/User'
import { actions as modalsActions } from 'redux/modules/Modals'
import { withRouter } from 'react-router'

const mapStateToProps = ({ user, search }) => {
  return {
    user,
    searchBar: search.bar
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchBarActions: bindActionCreators(searchBarActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    modalsActions: bindActionCreators(modalsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  // as navigation depends on external react-router state, thus component is no longer pure
  { pure: false }
)(withRouter(Navbar))
