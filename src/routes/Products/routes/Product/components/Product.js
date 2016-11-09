import React, { PropTypes, Component } from 'react'
import './Product.scss'

const propTypes = {
  init: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
}

class Product1 extends Component {
  componentWillMount () {
    const { init, params } = this.props
    init(params.id)
  }

  render () {
    const {  } = this.props
    return (
      <div>
      </div>
    )
  }

}

Product1.propTypes = propTypes
export default Product1
