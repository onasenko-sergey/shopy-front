import React, { PropTypes } from 'react'
import './ProductOrder.scss'
import Section from 'components/Section'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Gallery from 'containers/Gallery'
import OrderForm from 'forms/Order'

const propTypes = {
  product: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export const ProductOrder = ({ product, onSubmit }) => (
  <Section className='product-order'>
    <Grid>
      <Row>
        <Col sm={7} className='product-order__header'>
          <h3 className='product-order__name'>{product.name}</h3>
          <p className='product-order__comprise'>{product.comprise}</p>
        </Col>
        <Col sm={5} className='product-order__gallery'>
          <Gallery images={product.images.map((src) => ({ src, caption: product.name }))} />
        </Col>
        <Col sm={7} className='product-order__details'>
          <p className='product-order__description'>{product.description}</p>
          <OrderForm
            product={product}
            onSubmit={onSubmit}
            initialValues={{ quantity: 1 }} />
        </Col>
      </Row>
    </Grid>
  </Section>
)

ProductOrder.propTypes = propTypes
export default ProductOrder
