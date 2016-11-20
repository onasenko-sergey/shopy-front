import React, { Component } from 'react'
import './Cart.scss'
import Icons from 'components/Icons'
import { Link } from 'react-router'
import Badge from 'react-bootstrap/lib/Badge'

class CartItem extends Component {
  render () {
    return (
      <li className='user-menu__item cart'>
        <Link to={'/user/cart'}>
          <Icons.Cart />
          <Badge>5</Badge>
        </Link>
      </li>
    )
  }
}

export default CartItem

