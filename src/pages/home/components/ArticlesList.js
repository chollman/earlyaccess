import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './articles-list.scss'

const ArticlesList = ({ articles }) => {
  return (
    <Container className='articles-list'>
      <Row>
        {articles.map(({ url, title, urlToImage, description }) => {
          return (
            <Col className='article-wrapper' key={url} md={4}>
              <div className='article'>
                <h4>{title}</h4>
                <Image
                  className='article-image'
                  fluid
                  src={urlToImage}
                  alt={title}
                />
                <p>{description}</p>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

ArticlesList.propTypes = { articles: PropTypes.array.isRequired }

export default ArticlesList
