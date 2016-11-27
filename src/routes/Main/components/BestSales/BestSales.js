import React, { PropTypes } from 'react'
import './BestSales.scss'
import Section from 'components/Section'
import CollectionGridHOC from 'containers/CollectionGridHOC'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import { ProductCard2 as ProductCard } from 'components/ProductCard'

const propTypes = {
  collection: PropTypes.array,
  col: PropTypes.number,
  row: PropTypes.number
}

export const BestSales = ({ collection, col, row }) => {
  return (
    <Section className='best-sales'>
      <Grid>
        <h2 className='title'><span>Best</span> sales</h2>
        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <Row>
          {
            collection
              .slice(0, col * row)
              .map((item) => (
                <Col sm={6} md={4} key={item._id}>
                  <ProductCard product={item} />
                </Col>
              ))
          }
        </Row>
      </Grid>
    </Section>
  )
}

BestSales.propTypes = propTypes
export default CollectionGridHOC({
  gridMap: {
    '0': { col: 1, row: 2 },
    '768': { col: 2, row: 1 },
    '992': { col: 3, row: 1 }
  }
})(BestSales)
