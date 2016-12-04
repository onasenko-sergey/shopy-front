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
    const { product, relatedProducts, cartActions: { addToCart }, params: { id }, user,
      userActions: { login } } = this.props
    return (
      <div>
        {!!product &&
          <ProductOrder
            product={product}
            onSubmit={(data) => {
              if (!user.isAuthorized) { login().then(() => {addToCart(id, data)}) }
              else {addToCart(id, data)}
            }}
          />
        }
        <RelatedProducts collection={relatedProducts} />
      </div>
    )
  }

}

Product1.propTypes = propTypes
export default Product1
