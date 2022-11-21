import React from 'react'
import './image-slider.scss'
import Carousel from 'react-bootstrap/Carousel'
import { BsTwitter } from 'react-icons/bs'

//import PropTypes from 'prop-types'

const ImageSlider = ({ articles }) => {
  return (
    <Carousel className='contenedor' nextIcon=<BsTwitter />>
      <Carousel.Item>hola</Carousel.Item>
      <Carousel.Item>chau</Carousel.Item>
    </Carousel>
  )
}

//ImageSlider.propTypes = {}

export default ImageSlider
