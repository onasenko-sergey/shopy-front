import React from 'react'
import '../../styles/core.scss'
import Header from 'components/Header'
import Modals from 'containers/Modals'

export const CoreLayout = ({ children }) => (
  <div style={{ height: '100%' }}>
    <Header />
    <main>
      {children}
    </main>
    <Modals />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
