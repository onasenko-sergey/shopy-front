import React, { Component, PropTypes } from 'react'
import './Profile.scss'
import Grid from 'react-bootstrap/lib/Grid'
import Well from 'react-bootstrap/lib/Well'

const propTypes = {
  init: PropTypes.func.isRequired,
  profile: PropTypes.object
}

export class Profile extends Component {
  componentWillMount () {
    const { init } = this.props
    init(true)
  }

  render () {
    const { profile } = this.props
    if (!profile) return null
    return (
      <Grid>
        <Well className='profile'>
          <img src={profile['photo_400_orig']} alt='avatar' className='img-responsive' />
          <h3>
            <a href={'https://vk.com/' + profile.domain}>
              {profile['first_name'] + ' ' + profile['last_name']}
            </a>
          </h3>
          <p>{profile.about}</p>
        </Well>
      </Grid>
    )
  }
}

Profile.propTypes = propTypes
export default Profile
