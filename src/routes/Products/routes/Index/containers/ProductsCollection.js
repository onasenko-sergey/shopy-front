import React, { Component } from 'react'
import ProductsCollection from '../components/ProductsCollection'

class ProductsCollection1 extends Component {
  constructor (props) {
    super(props)

    this.onComplete = this.onComplete.bind(this)

    this.state = {
      btnMoreHidden: false
    }
  }

  onComplete () {
    this.setState({ btnMoreHidden: true })
  }

  render () {
    const { btnMoreHidden } = this.state
    return (
      <ProductsCollection
        {...this.props}
        btnMoreHidden={btnMoreHidden}
        onComplete={this.onComplete}
      />
    )
  }
}

export default ProductsCollection1
