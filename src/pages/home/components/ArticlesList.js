import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import './articles-list.scss';

const ArticlesList = ({ articles }) => {
  return (
    <Container className='articles-list'>
      <Row>
        {articles.map(({ _id, title, image, description }) => {
          return (
            <Col className='article-wrapper' key={_id} xs={12} md={6} lg={4}>
              <Link className='link' to={`/articulo/${_id}`}>
                <div className='article'>
                  <h4>
                    {title.length < 44 ? title : `${title.substring(0, 45)}...`}
                  </h4>
                  <div className='image-container'>
                    <Image
                      className='article-image'
                      fluid
                      src={image}
                      alt={title}
                    />
                  </div>
                  <p>
                    {`${description.substring(0, 85)}...`} <span>Leer mas</span>
                  </p>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

ArticlesList.propTypes = { articles: PropTypes.array.isRequired };

export default ArticlesList;
