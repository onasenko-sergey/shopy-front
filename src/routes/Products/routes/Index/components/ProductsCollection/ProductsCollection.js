import React, { Component, PropTypes } from 'react'
import './ProductsCollection.scss'
import CollectionGrid from 'containers/CollectionGrid'
import CollectionView from './CollectionView'

const propTypes = {
  products: PropTypes.array.isRequired
}

class ProductsCollection extends Component {
  constructor (props) {
    super(props)

    this.reset = this.reset.bind(this)
  }

  reset () {
    this._collection && this._collection.reset()
  }

  render () {
    const { products, ...rest } = this.props
    if (!products.length) return null
    return (
      <CollectionGrid
        collection={products}
        gridMap={{
          '0': { col: 1, row: 3 },
          '768': { col: 2, row: 3 },
          '1200': { col: 3, row: 3 }
        }}
        {...rest}
        ref={(collection) => { this._collection = collection }}
      >
        <CollectionView />
      </CollectionGrid>
    )
  }
}

ProductsCollection.propTypes = propTypes
export default ProductsCollection
