import React, { PropTypes } from 'react'
import './Gallery.scss'
import Lightbox from 'react-images'

const propTypes = {
  images: PropTypes.array.isRequired,
  lightboxImage: PropTypes.number.isRequired,
  lightboxIsOpen: PropTypes.bool.isRequired,
  openLightbox: PropTypes.func.isRequired,
  onLightboxImageClick: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickThumbnail: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  activeImage: PropTypes.number.isRequired,
  onImageClick: PropTypes.func.isRequired
}

export const Gallery = ({ images, lightboxImage, lightboxIsOpen, openLightbox, onLightboxImageClick, onClickNext,
  onClickPrev, onClickThumbnail, onClose, activeImage, onImageClick }) => (
    <div className='gallery'>
      <div className='gallery__image-wrapper_active'>
        <a href='' onClick={(e) => { openLightbox(activeImage, e) }}>
          <img className='gallery__image' src={images[activeImage].src} alt={images[activeImage].caption} />
        </a>
      </div>
      <div className='gallery__image-container'>
        {images.map((image, i) => (
          <div className={'gallery__image-wrapper' + ((i === activeImage) ? '_current' : '')} key={i}>
            <a href='' onClick={(e) => { onImageClick(i, e) }}>
              <img className='gallery__image' src={image.src} alt={image.caption} />
            </a>
          </div>
        ))}
      </div>
      <Lightbox
        currentImage={lightboxImage}
        isOpen={lightboxIsOpen}
        images={images}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        onClose={onClose}
        onClickImage={(e) => { onLightboxImageClick(images.length, e) }}
        onClickThumbnail={onClickThumbnail}
        backdropClosesModal
      />
    </div>
)

Gallery.propTypes = propTypes
export default Gallery
