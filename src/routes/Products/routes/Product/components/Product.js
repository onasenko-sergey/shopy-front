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

  componentWillUpdate (nextProps) {
    const { init, params: { id } } = nextProps
    if (id !== this.props.params.id) init(id)
  }

  render () {
    const { product, relatedProducts } = this.props
    return (
      <div>
        <ProductOrder product={product} />
        <RelatedProducts collection={relatedProducts} />
      </div>
    )
  }

}

Product1.propTypes = propTypes
export default Product1
