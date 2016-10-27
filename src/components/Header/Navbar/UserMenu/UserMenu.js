import React, { PropTypes } from 'react'
import './UserMenu.scss'
import SearchItem from './MenuItems/Search'
import UserItem from './MenuItems/User'
import CartItem from './MenuItems/Cart'

const propTypes = {
  searchBar: PropTypes.object.isRequired,
  searchBarActions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  modalsActions: PropTypes.object.isRequired
}

export const UserMenu = ({ searchBar, searchBarActions, user, userActions, router, modalsActions }) => (
  <div className='user-menu'>
    <ul className='list-inline'>
      <SearchItem searchBar={searchBar} searchBarActions={searchBarActions} />
      <UserItem user={user} userActions={userActions} router={router} modalsActions={modalsActions} />
      <CartItem />
    </ul>
  </div>
)

UserMenu.propTypes = propTypes
export default UserMenu
