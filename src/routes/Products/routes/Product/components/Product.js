import React, { PropTypes, Component } from 'react'
import './Product.scss'
import ProductOrder from 'components/ProductOrder'
import RelatedProducts from './RelatedProducts'

const propTypes = {
  init: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  product: PropTypes.object,
  relatedProducts: PropTypes.array
}

class Product1 extends Component {
  componentWillMount () {
    const { init, params } = this.props
    init(params.id)
  }

  render () {
    const { product, relatedProducts } = this.props
    return (
      <div>
        <ProductOrder product={product} />
        <RelatedProducts products={relatedProducts} />
      </div>
    )
  }

}

Product1.propTypes = propTypes
export default Product1
