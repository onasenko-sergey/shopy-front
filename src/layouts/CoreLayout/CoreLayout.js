import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'
import Header from 'components/Header'
import Modals from 'containers/Modals'
import Errors from 'containers/Errors'
import NewsLetter from 'components/NewsLetter'

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
    <Modals />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
