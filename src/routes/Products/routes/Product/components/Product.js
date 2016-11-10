import React, { PropTypes, Component } from 'react'
import './Product.scss'
import RelatedProducts from './RelatedProducts'

const propTypes = {
  init: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  relatedProducts: PropTypes.array
}

class Product1 extends Component {
  componentWillMount () {
    const { init, params } = this.props
    init(params.id)
  }

  render () {
    const { relatedProducts } = this.props
    return (
      <div>
        <RelatedProducts products={relatedProducts} />
      </div>
    )
  }

}

Product1.propTypes = propTypes
export default Product1
