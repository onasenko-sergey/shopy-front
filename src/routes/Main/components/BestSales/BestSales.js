import React, { PropTypes } from 'react'
import './BestSales.scss'
import Section from 'components/Section'
import CollectionGrid from 'containers/CollectionGrid'
import { ProductCard2 as ProductCard } from 'components/ProductCard'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

const propTypes = {
  products: PropTypes.array.isRequired
}

export const BestSales = ({ products }) => {
  if (!products.length) return null
  return (
    <Section className='best-sales'>
      <Grid>
        <h2 className='title'><span>Best</span> sales</h2>
        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <Row>
          <CollectionGrid
            collection={products}
            gridMap={{
              '0': { col: 1, row: 2 },
              '768': { col: 2, row: 1 },
              '992': { col: 3, row: 1 }
            }}
            component={(item, key) => (
              <Col sm={6} md={4} key={key}>
                <ProductCard product={item} />
              </Col>
            )}
          />
        </Row>
      </Grid>
    </Section>
  )
}

BestSales.propTypes = propTypes
export default BestSales
