import React from 'react'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticlesList from './components/ArticlesList'

import './home.scss'

const Home = (props) => {
  const articles = useSelector((store) => store.articles.data)
  return (
    <section className='home'>
      <Container className='article-list-wrapper'>
        <Row>
          <Col>
            <h3>Lista de Noticias</h3>
            <ArticlesList articles={articles} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
