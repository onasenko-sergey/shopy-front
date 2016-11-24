import React, { PropTypes } from 'react'
import './BestSales.scss'
import Section from 'components/Section'
import CollectionGrid from 'containers/CollectionGrid'
import Grid from 'react-bootstrap/lib/Grid'
import CollectionView from './CollectionView'

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
        <CollectionGrid
          collection={products}
          gridMap={{
            '0': { col: 1, row: 2 },
            '768': { col: 2, row: 1 },
            '992': { col: 3, row: 1 }
          }}
        >
          <CollectionView />
        </CollectionGrid>
      </Grid>
    </Section>
  )
}

BestSales.propTypes = propTypes
export default BestSales
