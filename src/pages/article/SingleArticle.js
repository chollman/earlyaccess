import React from 'react'
//import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { data } from '../../data'

const SingleArticle = () => {
  const { articleId } = useParams()
  const article = data.articles.filter(({ id }) => {
    return Number(articleId) === id
  })[0]
  if (!article) {
    return <div> No hay articulo </div>
  }
  return (
    <div>
      <h2>{article.title}</h2>
    </div>
  )
}

//SingleArticle.propTypes = {}

export default SingleArticle
