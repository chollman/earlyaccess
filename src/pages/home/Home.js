import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticlesList from './components/ArticlesList';
import { getAllArticles } from '../../state/articles/articlesSlice';
import ImageSlider from './components/ImageSlider';

import './home.scss';

const Home = (props) => {
  const articles = useSelector((store) => store.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  return (
    <section className='home'>
      <Container className='article-list-wrapper'>
        <Row>
          <Col>
            <ImageSlider />
            <h3>Lista de Noticias</h3>
            <ArticlesList articles={articles.data} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
