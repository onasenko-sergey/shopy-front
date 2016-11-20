import React, { PropTypes } from 'react'
import './LogoutModal.scss'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import vkLogoutImage from './assets/vk_logout.jpg'

const propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleVkLogout: PropTypes.func.isRequired,
  handleShopyLogout: PropTypes.func.isRequired
}

export const LogoutModal = ({ handleClose, handleVkLogout, handleShopyLogout }) => (
  <Modal show onHide={handleClose} className='modal-logout'>
    <Modal.Header closeButton>
      <Modal.Title>Warning!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='alert alert-danger' role='alert'>
        <h4>Be aware.</h4>
        <p>While you are logged in at VK.com, any user of this device can sign in with your account.</p>
        <p>To prevent this - follow "Logout from VK".</p>
      </div>
      <img className='img-responsive' src={vkLogoutImage} alt='VK logout' />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleVkLogout}>Logout from VK</Button>
      <Button onClick={handleShopyLogout}>Logout from SHOPY</Button>
    </Modal.Footer>
  </Modal>
)

LogoutModal.propTypes = propTypes
export default LogoutModal
