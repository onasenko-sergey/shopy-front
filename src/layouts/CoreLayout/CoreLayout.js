import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'
import Header from 'components/Header'
import Modals from 'containers/Modals'
import Errors from 'containers/Errors'

export const CoreLayout = ({ children }) => (
  <div className='core-layout'>
    <Header />
    <main>
      {children}
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
