import React, { Component } from 'react'
import Gallery from 'components/ProductOrder/Gallery'

class Gallery1 extends Component {
  constructor (props) {
    super()

    this.state = {
      lightboxIsOpen: false,
      lightboxImage: 0,
      activeImage: 0
    }

    this.openLightbox = this.openLightbox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleLightboxImageClick = this.handleLightboxImageClick.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
  }

  openLightbox (index, event) {
    event.preventDefault()
    this.setState({
      lightboxImage: index,
      lightboxIsOpen: true
    })
  }

  closeLightbox () {
    this.setState({
      lightboxImage: 0,
      lightboxIsOpen: false
    })
  }

  gotoPrevious () {
    this.setState({
      lightboxImage: this.state.lightboxImage - 1
    })
  }

  gotoNext () {
    this.setState({
      lightboxImage: this.state.lightboxImage + 1
    })
  }

  gotoImage (index) {
    this.setState({
      lightboxImage: index
    })
  }

  handleLightboxImageClick (length, event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.state.lightboxImage === length - 1) return
    this.gotoNext()
  }

  handleImageClick (index, event) {
    event.preventDefault()
    this.setState({
      activeImage: index
    })
  }

  render () {
    return (
      <Gallery
        {...this.props}
        openLightbox={this.openLightbox}
        lightboxImage={this.state.lightboxImage}
        lightboxIsOpen={this.state.lightboxIsOpen}
        onClickNext={this.gotoNext}
        onClickPrev={this.gotoPrevious}
        onClickThumbnail={this.gotoImage}
        onLightboxImageClick={this.handleLightboxImageClick}
        onClose={this.closeLightbox}
        activeImage={this.state.activeImage}
        onImageClick={this.handleImageClick}
      />
    )
  }
}

export default Gallery1
