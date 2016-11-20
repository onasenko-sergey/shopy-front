import React, { PropTypes } from 'react'
import './Navbar.scss'
import Nav from 'react-bootstrap/lib/Navbar'
import { Link, IndexLink } from 'react-router'
import Logo from 'components/Logo'
import DisabledLink from 'components/DisabledLink'
import UserMenu from './UserMenu'
import SearchBar from './SearchBar'

const propTypes = {
  searchBar: PropTypes.object.isRequired,
  searchBarActions: PropTypes.object.isRequired
}

export const Navbar = (props) => (
  <Nav>
    <Nav.Brand>
      <Link to={'/'}><Logo /></Link>
    </Nav.Brand>
    <Nav.Toggle />
    <div className='navbar__user-menu'>
      <UserMenu {...props} />
    </div>
    <Nav.Collapse>
      <ul className='nav navbar-nav'>
        <li><IndexLink to={'/'} activeClassName='active'>Home</IndexLink></li>
        <li><Link to={'/products'} activeClassName='active'>Products</Link></li>
        <li><DisabledLink>Hot Deals</DisabledLink></li>
        <li><DisabledLink>About</DisabledLink></li>
        <li><DisabledLink>Contact</DisabledLink></li>
      </ul>
    </Nav.Collapse>
    <div className='navbar__searchbar'>
      <SearchBar {...props.searchBar} {...props.searchBarActions} />
    </div>
  </Nav>
)

Navbar.propTypes = propTypes

export default Navbar
