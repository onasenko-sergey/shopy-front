import React, { PropTypes } from 'react'
import './OrderForm.scss'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import SizeInput from './SizeInput'
import QuantityInput from './QuantityInput'
import ProductMenu from './ProductMenu'
import Button from 'react-bootstrap/lib/Button'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

export const OrderForm = ({ handleSubmit, product }) => (
  <form className='order-form' onSubmit={handleSubmit}>
    <Row className='order-form__row'>
      <Col md={6} className='order-form__size'>
        <SizeInput sizes={product.sizes} />
      </Col>
      <Col md={6} className='order-form__quantity'>
        <QuantityInput />
      </Col>
    </Row>
    <Row className='order-form__row'>
      <div className='order-form__price'>
        <p>Price: {product.price}$</p>
      </div>
      <div className='order-form__actions'>
        <ProductMenu />
      </div>
      <div className='order-form__buttons'>
        <Button type='submit' className='order-form__btn-submit'>Order now</Button>
      </div>
    </Row>
  </form>
)

OrderForm.propTypes = propTypes
export default OrderForm
