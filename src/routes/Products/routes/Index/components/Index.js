import React, { PropTypes } from 'react'
import './Index.scss'
import Section from 'components/Section'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import ProductsForm from 'forms/Products'

const propTypes = {}

export const Index = () => (
  <Section className='products-page'>
    <Grid>
      <Row>
        <Col md={4} lg={3} className='products-page__filters'>
          <ProductsForm onSubmit={(data) => { console.log('Products filter: ', data) }} />
        </Col>
        <Col md={8} lg={9} className='products-page__collection'>
          Collection
        </Col>
      </Row>
    </Grid>
  </Section>
)

Index.propTypes = propTypes
export default Index
