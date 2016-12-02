import React, { PropTypes } from 'react'
import './Cart.scss'
import Section from 'components/Section'

const propTypes = {
  cart: PropTypes.array.isRequired
}

export const Cart = ({ cart }) => (
  <Section className='cart'>
    <h2 className='title'>User <span>cart</span></h2>
    <pre>
      {JSON.stringify(cart, null, '  ')}
    </pre>
  </Section>
)

Cart.propTypes = propTypes
export default Cart
