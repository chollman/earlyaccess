import React from 'react'
import PropTypes from 'prop-types'

const ArticlesList = ({ articles }) => {
  return (
    <div>
      {articles.map(({ url, title, urlToImage, description }) => {
        return (
          <div key={url}>
            <h4>{title}</h4>
            <img src={urlToImage} alt={title} height='300' width='450' />
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  )
}

ArticlesList.propTypes = { articles: PropTypes.array.isRequired }

export default ArticlesList
