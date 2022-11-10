import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import ArticlesList from './components/ArticlesList'

const Home = (props) => {
  const articles = useSelector((store) => store.articles.data)
  return (
    <div>
      <h3>Lista de Noticias</h3>
      <ArticlesList articles={articles} />
    </div>
  )
}

Home.propTypes = {}

export default Home
