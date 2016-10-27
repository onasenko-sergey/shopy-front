import React, { Component, PropTypes } from 'react'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Icons from 'components/Icons'
import LogoutModal from 'components/Modals/LogoutModal'

const propTypes = {
  user: PropTypes.object.isRequired,
  userActions: PropTypes.objectOf(PropTypes.func).isRequired,
  router: PropTypes.object.isRequired,
  modalsActions: PropTypes.objectOf(PropTypes.func).isRequired
}

class UserItem extends Component {
  constructor (props) {
    super(props)

    this.login = this.login.bind(this)
    this.openModalLogout = this.openModalLogout.bind(this)
  }

  login (e) {
    e.preventDefault()
    this.props.userActions.login()
  }

  openModalLogout (e) {
    e.preventDefault()
    const { modalsActions, userActions } = this.props
    modalsActions.open((key) => (
      <LogoutModal
        key={key}
        handleClose={modalsActions.close}
        handleVkLogout={() => { modalsActions.close(); userActions.logout(true) }}
        handleShopyLogout={() => { modalsActions.close(); userActions.logout() }}
      />
    ))
  }

  render () {
    const { user, router } = this.props
    if (user.isAuthorized) {
      return (
        <NavDropdown
          noCaret
          title={<Icons.User highlighted />}
          id='usermenu-dropdown'
          className='user-menu__item'
        >
          <MenuItem eventKey='1'
            href='/user/profile'
            onClick={(e) => { e.preventDefault(); router.push('/user/profile') }}
          >
            Profile
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='2'
            href='/user/logout'
            onClick={this.openModalLogout}
          >
            Log out
          </MenuItem>
        </NavDropdown>
      )
    }
    return (
      <li className='user-menu__item'>
        <a href='/user/login' onClick={this.login}>
          <Icons.User />
        </a>
      </li>
    )
  }
}

UserItem.propTypes = propTypes

export default UserItem

