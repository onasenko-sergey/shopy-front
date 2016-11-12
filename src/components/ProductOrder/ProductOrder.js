import React, { PropTypes } from 'react'
import './ProductOrder.scss'
import Section from 'components/Section'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Gallery from 'containers/Gallery'

const propTypes = {
  product: PropTypes.object
}

export const ProductOrder = ({ product }) => {
  if (!product) return null
  return (
    <Section className='product-order'>
      <Grid>
        <Row>
          <Col sm={5} className='product-order__gallery'>
            <Gallery images={product.images.map((src) => ({ src, caption: product.name }))} />
          </Col>
        </Row>
      </Grid>
    </Section>
  )
}

ProductOrder.propTypes = propTypes
export default ProductOrder
