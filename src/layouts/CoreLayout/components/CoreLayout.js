import React from 'react'
import './CoreLayout.scss'
import '../../../styles/core.scss'
import Header from './Header'
import Modals from '../containers/Modals'
import Errors from '../containers/Errors'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

export const CoreLayout = ({ children }) => (
  <div className='core-layout'>
    <Header />
    <main>
      {children}
      <NewsLetter />
    </main>
    <aside>
      <Errors />
    </aside>
    <Footer />
    <Modals />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
