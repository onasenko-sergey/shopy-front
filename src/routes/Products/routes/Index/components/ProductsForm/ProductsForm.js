import React, { PropTypes } from 'react'
import './ProductsForm.scss'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import CheckboxGroup from './CheckboxGroup'
import RangeField from './RangeField'
import { Field } from 'redux-form'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
}

export const ProductsForm = ({ handleSubmit, initialValues: { price: { min, max } } }) => (
  <form onSubmit={handleSubmit} className='products-form'>
    <Row>
      <Col sm={6} md={12}>
        <Field
          component={CheckboxGroup}
          className='products-form__categories-filter'
          name='categories'
          legend='Categories'
          fields={[
            { label: 'Man', value: 0 },
            { label: 'Women', value: 1 },
            { label: 'Children', value: 2 },
            { label: 'Hot deals', value: 3 }
          ]}
        />
      </Col>
      <Col sm={6} md={12}>
        <Field
          component={RangeField}
          className='products-form__price-filter'
          name='price'
          legend='Price Filter'
          range={{ min: min || 0, max: max || 1000 }}
        />
      </Col>
    </Row>
    <Row>
      <Col sm={6} md={12}>
        <Field
          component={CheckboxGroup}
          className='products-form__sizes-filter'
          name='sizes'
          legend='Sizes'
          fields={[
            { label: 'X Small', value: 0 },
            { label: 'Small', value: 1 },
            { label: 'Midum', value: 2 },
            { label: 'Large', value: 3 },
            { label: 'X Large', value: 4 }
          ]}
        />
      </Col>
      <Col sm={6} md={12}>
        <Field
          component={CheckboxGroup}
          className='products-form__brands-filter'
          name='brands'
          legend='Brands'
          fields={[
            { label: 'Adidas', value: 'Adidas' },
            { label: 'Asics', value: 'Asics' },
            { label: 'Nike', value: 'Nike' },
            { label: 'Puma', value: 'Puma' },
            { label: 'Reebok', value: 'Reebok' }
          ]}
        />
      </Col>
    </Row>
  </form>
)

ProductsForm.propTypes = propTypes
export default ProductsForm
