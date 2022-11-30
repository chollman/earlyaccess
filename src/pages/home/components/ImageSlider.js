import React from 'react'
import './image-slider.scss'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap'
//import PropTypes from 'prop-types'

const ImageSlider = ({ articles }) => {
  const newArticles = articles.slice(0,5)
  return (
    <Carousel className='contenedor'>
      {newArticles.map(({ _id, title, image, description }) => {
        return (
          <CarouselItem key={_id}>
            <div className='image-container'>
              <img className='article-image' src={image} alt={title} />
            </div>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}

//ImageSlider.propTypes = {}

export default ImageSlider
