import React, { PropTypes } from 'react'
import './Section.scss'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export const Section = (props) => (
  <section {...props} className={['section', props.className].join(' ')}>
    {props.children}
  </section>
)

Section.propTypes = propTypes
export default Section
