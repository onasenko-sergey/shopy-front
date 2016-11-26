import { connect } from 'react-redux'
import { actions } from '../modules/Profile'

import Profile from '../components/Profile'

const mapStateToProps = ({ profile_page: { profile } }) => ({ profile })

export default connect(mapStateToProps, actions)(Profile)
