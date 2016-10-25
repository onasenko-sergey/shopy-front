import React, { PropTypes } from 'react'

const propTypes = {
  stack: PropTypes.arrayOf(PropTypes.func).isRequired
}

export const Modals = ({ stack }) => {
  if (!stack.length) return null
  const modals = stack.map((modal, i) => {
    return modal(i)
  })
  return (
    <div>
      {modals}
    </div>
  )
}

Modals.propTypes = propTypes

export default Modals
