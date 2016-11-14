import React from 'react'
import './ProductMenu.scss'
import Icons from 'components/Icons'

export const ProductMenu = () => (
  <ul className='product-menu list-inline'>
    <li className='product-menu__item'><Icons.Share /></li>
    <li className='product-menu__item'><Icons.AddToCart /></li>
    <li className='product-menu__item'><Icons.Like /></li>
  </ul>
)

export default ProductMenu
