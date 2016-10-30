import React, { PropTypes } from 'react'
import './Carousel.scss'
import Carousel from 'react-bootstrap/lib/Carousel'
import CarouselItem from './CarouselItem'

const propTypes = {
  products: PropTypes.array.isRequired
}

export const Carousel1 = ({ products }) => {
  if (!products.length) return null
  const carouselItems = products.map(product => (
    <Carousel.Item className='shopy-carousel__item' key={product._id}>
      <CarouselItem product={product} />
    </Carousel.Item>
  ))
  return (
    <section className='shopy-carousel'>
      <Carousel controls={false} className='container' >
        { carouselItems }
      </Carousel>
    </section>
  )
}

Carousel1.propTypes = propTypes
export default Carousel1
