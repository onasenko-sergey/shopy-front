import React from 'react'
import './Contacts.scss'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Icons from 'components/Icons'

export const Contacts = () => (
  <div className='contacts'>
    <Grid>
      <Row>
        <Col sm={6}>
          <ul className='list-inline contacts__addresses'>
            <li>
              <address className='contacts__address'>
                <a href='mailto:info@shopy.com' className='contacts__mail-link'>
                  <Icons.Mail />
                  info@shopy.com
                </a>
              </address>
            </li>
            <li>
              <address className='contacts__address'>
                <a href='callto:4535553996' className='contacts__phone-link'>
                  <Icons.Phone />
                  453 - 5553 - 996
                </a>
              </address>
            </li>
          </ul>
        </Col>
        <Col sm={6}>
          <ul className='list-inline contacts__social-medias'>
            <li><a href='https://www.facebook.com/' target='_blank'><Icons.Facebook /></a></li>
            <li><a href='https://twitter.com/' target='_blank'><Icons.Twitter /></a></li>
            <li><a href='https://plus.google.com/' target='_blank'><Icons.GooglePlus /></a></li>
            <li><a href='https://www.instagram.com/' target='_blank'><Icons.Instagram /></a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Contacts
