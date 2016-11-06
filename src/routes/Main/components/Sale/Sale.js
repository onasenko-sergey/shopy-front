import React, { PropTypes } from 'react'
import './Sale.scss'
import Section from 'components/Section'
import Icons from 'components/Icons'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

const propTypes = {
  products: PropTypes.array.isRequired
}

export const Sale = ({ products }) => {
  if (!products.length) return null
  const product = products[0]
  return (
    <Section className='sale'>
      <Row>
        <Col sm={3}>
          <div className='sale__percentage'>
            Sale
            <br />
            <span>50%</span>
          </div>
        </Col>
        <Col sm={6}>
          <div className='sale__details'>
            <p className='sale__name'>{product.brand + ' ' + product.name}</p>
            <p className='sale__comprise'>{product.comprise}</p>
          </div>
        </Col>
        <Col sm={3}>
          <div className='sale__price-wrapper'>
            <a href='' className='sale__order'>
              <Icons.AddToCart highlighted />
              <span className='sale__price'>
                {Math.round(product.price)}
                <span className='sale__price-currency'>$</span>
              </span>
            </a>
          </div>
        </Col>
      </Row>
    </Section>
  )
}

Sale.propTypes = propTypes
export default Sale
