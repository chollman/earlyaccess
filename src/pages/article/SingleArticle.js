import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { getArticle } from '../../state/articles/articlesSlice'


const SingleArticle = () => {
  const { articleId } = useParams()
  const dispatch = useDispatch()
  const article = useSelector((store) => store.articles.currentArticle)
  useEffect(() => {
    dispatch(getArticle(articleId))
  }, [dispatch, articleId])

  if (!article) {
    return <div> Cargando... </div>
  }
  return (
    <div>
      <h2>{article.title}</h2>
      <div>
      <img src={article.image} alt={article.title}/>
      </div>
      
    </div>
  )
}

//SingleArticle.propTypes = {}

export default SingleArticle
