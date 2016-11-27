import React, { PropTypes } from 'react'
import './NewArrivals.scss'
import Section from 'components/Section'
import CollectionGridHOC from 'containers/CollectionGridHOC'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import ProductCard from 'components/ProductCard'
import Button from 'react-bootstrap/lib/Button'

const propTypes = {
  collection: PropTypes.array,
  col: PropTypes.number,
  row: PropTypes.number,
  quantity: PropTypes.number,
  addRows: PropTypes.func
}

export const NewArrivals = ({ collection, col, row, quantity, addRows }) => (
  <Section className='new-arrivals'>
    <Grid>
      <h2 className='title'><span>New</span> arrivals</h2>
      <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      <Row>
        {
          collection
            .slice(0, col * row)
            .map((item) => (
              <Col sm={6} md={4} lg={3} key={item._id} className='new-arrivals__product-card'>
                <ProductCard product={item} />
              </Col>
            ))
        }
      </Row>
      <Button
        onClick={() => { addRows() }}
        hidden={collection.length === quantity}
        className='new-arrivals__more-btn'
      >
        <span className='new-arrivals__ellipsis' />
      </Button>
    </Grid>
  </Section>
)

NewArrivals.propTypes = propTypes
export default CollectionGridHOC({
  gridMap: {
    '0': { col: 1, row: 2 },
    '768': { col: 2, row: 1 },
    '992': { col: 3, row: 1 },
    '1200': { col: 4, row: 1 }
  }
})(NewArrivals)
