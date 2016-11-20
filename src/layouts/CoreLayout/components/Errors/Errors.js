import React, { PropTypes } from 'react'
import Alert from 'react-bootstrap/lib/Alert'
import Section from 'components/Section'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

const propTypes = {
  errors: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}

export const Errors = ({ errors, remove }) => {
  if (!errors.length) return null
  const messages = errors.map((err, i) => (
    <Alert bsStyle='danger' onDismiss={() => { remove(i) }} key={i}>
      <details className='text-left'>
        <summary>
          Error: {err.message}
        </summary>
        <pre>
          {JSON.stringify(err, null, '\t')}
        </pre>
      </details>
    </Alert>
  ))
  return (
    <Section>
      <Grid>
        <Row>
          {messages}
        </Row>
      </Grid>
    </Section>
  )
}

Errors.propTypes = propTypes

export default Errors
