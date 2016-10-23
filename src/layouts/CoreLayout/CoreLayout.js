import React from 'react'
import 'styles/core.scss'

export const CoreLayout = ({ children }) => (
  <main style={{ height: '100%' }}>
    {children}
  </main>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
