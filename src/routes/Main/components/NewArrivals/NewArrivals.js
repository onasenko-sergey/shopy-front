import React, { Component, PropTypes } from 'react'
import './NewArrivals.scss'
import Section from 'components/Section'
import CollectionGrid from 'containers/CollectionGrid'
import Grid from 'react-bootstrap/lib/Grid'
import CollectionView from './CollectionView'

const propTypes = {
  products: PropTypes.array.isRequired
}

class NewArrivals extends Component {
  render () {
    const { products } = this.props
    if (!products.length) return null
    return (
      <Section className='new-arrivals'>
        <Grid>
          <h2 className='title'><span>New</span> arrivals</h2>
          <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <CollectionGrid
            collection={products}
            gridMap={{
              '0': { col: 1, row: 2 },
              '768': { col: 2, row: 1 },
              '992': { col: 3, row: 1 },
              '1200': { col: 4, row: 1 }
            }}
          >
            <CollectionView />
          </CollectionGrid>
        </Grid>
      </Section>
    )
  }
}

NewArrivals.propTypes = propTypes
export default NewArrivals
