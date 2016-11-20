import React, { Component, PropTypes } from 'react'
import './NewArrivals.scss'
import Section from 'components/Section'
import CollectionGrid from 'containers/CollectionGrid'
import ProductCard from 'components/ProductCard'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

const propTypes = {
  products: PropTypes.array.isRequired,
  btnMoreHidden: PropTypes.bool.isRequired,
  onComplete: PropTypes.func
}

class NewArrivals extends Component {
  constructor (props) {
    super(props)

    this.handleMoreClick = this.handleMoreClick.bind(this)
  }

  handleMoreClick () {
    this._collection.addRows()
  }

  render () {
    const { products, btnMoreHidden, onComplete } = this.props
    if (!products.length) return null
    return (
      <Section className='new-arrivals'>
        <Grid>
          <h2 className='title'><span>New</span> arrivals</h2>
          <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <Row>
            <CollectionGrid
              ref={(collection) => { this._collection = collection }}
              collection={products}
              gridMap={{
                '0': { col: 1, row: 2 },
                '768': { col: 2, row: 1 },
                '992': { col: 3, row: 1 },
                '1200': { col: 4, row: 1 }
              }}
              component={(item, key) => (
                <Col sm={6} md={4} lg={3} key={key} className='new-arrivals__product-card'>
                  <ProductCard product={item} />
                </Col>
              )}
              onComplete={onComplete}
            />
          </Row>
          <Button
            onClick={this.handleMoreClick}
            hidden={btnMoreHidden}
            className='new-arrivals__more-btn'
          >
            <span className='new-arrivals__ellipsis' />
          </Button>
        </Grid>
      </Section>
    )
  }
}

NewArrivals.propTypes = propTypes
export default NewArrivals
