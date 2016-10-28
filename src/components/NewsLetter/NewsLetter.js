import React from 'react'
import './NewsLetter.scss'
import Section from 'components/Section'
import NewsLetterForm from 'forms/NewsLetter'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export const NewsLetter = () => (
  <Section>
    <Grid>
      <Row className='news-letter'>
        <h3 className='news-letter__title col-xs-5 col-md-2 text-right'>News letter</h3>
        <p className='news-letter__description col-xs-7 col-md-4 text-left'>
          join us now to get all news and special offers
        </p>
        <Col md={6}>
          <NewsLetterForm
            className='news-letter__form'
            onSubmit={(data) => { if (data.email) console.log('Subsribe: ', data.email) }}
          />
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default NewsLetter
