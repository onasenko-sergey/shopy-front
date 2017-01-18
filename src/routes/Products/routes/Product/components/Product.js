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

class Product extends Component {
  componentWillMount () {
    const { init, params: { id } } = this.props
    init(id)
  }

  componentWillUpdate (nextProps) {
    const { init, params: { id } } = this.props
    if (id !== nextProps.params.id) init(id)
  }

  render () {
    const { product, relatedProducts, cartActions: { addToCart }, params: { id }, cart } = this.props
    const existingCartProducts = cart.filter((item) => { return item.product._id === id })
    return (
      <div>
        {!!product &&
          <ProductOrder
            product={product}
            onSubmit={(data) => { addToCart(id, data) }}
            existingCartProducts={existingCartProducts}
          />
        }
        <RelatedProducts collection={relatedProducts} />
      </div>
    )
  }

}

Product.propTypes = propTypes
export default Product
