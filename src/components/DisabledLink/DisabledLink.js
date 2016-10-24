import React, { PropTypes } from 'react'
import './DisabledLink.scss'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export const DisabledLink = (props) => (
  <a
    {...props}
    href=''
    className={['disabled-link', props.className].join(' ')}
    onClick={e => e.preventDefault()}
  >{props.children}</a>
)

DisabledLink.propTypes = propTypes

export default DisabledLink
