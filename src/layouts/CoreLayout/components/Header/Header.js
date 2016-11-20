import React from 'react'
import './Header.scss'
import Contacts from './Contacts'
import Navbar from '../../containers/Navbar'

export const Header = () => (
  <header className='header'>
    <Contacts />
    <Navbar />
  </header>
)

export default Header
