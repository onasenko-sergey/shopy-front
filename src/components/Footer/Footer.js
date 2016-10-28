import React from 'react'
import './Footer.scss'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Logo from 'components/Logo'
import PaymentImage from './assets/payment-methods.png'
import DisabledLink from 'components/DisabledLink'

export const Footer = () => (
  <footer className='footer'>
    <Grid>
      <Row>
        <Col sm={7} smPush={3}>
          <ul className='secondary-menu'>
            <li className='secondary-menu__item'><DisabledLink>about us</DisabledLink></li>
            <li className='secondary-menu__item'><DisabledLink>contact us</DisabledLink></li>
            <li className='secondary-menu__item'><DisabledLink>support</DisabledLink></li>
            <li className='secondary-menu__item'><DisabledLink>our feed</DisabledLink></li>
            <li className='secondary-menu__item'><DisabledLink>terms and conditions</DisabledLink></li>
            <li className='secondary-menu__item'><DisabledLink>our privacy</DisabledLink></li>
            <li className='secondary-menu__item'><DisabledLink>join us</DisabledLink></li>
            <li className='secondary-menu__item'><DisabledLink>live support</DisabledLink></li>
          </ul>
        </Col>
        <Col xs={6} sm={3} smPull={7}>
          <a href='#'><Logo /></a>
          <p className='copyright'>shopy © 2015 . your copyright here</p>
        </Col>
        <Col xs={6} sm={2}>
          <h4 className='payment-header'>Payment Methods</h4>
          <img src={PaymentImage} className='payment-image img-responsive' alt='Payment methods' />
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer
