import React from 'react'
import '../../styles/core.scss'
import Header from 'components/Header'

export const CoreLayout = ({ children }) => (
  <div style={{ height: '100%' }}>
    <Header />
    <main>
      {children}
    </main>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
