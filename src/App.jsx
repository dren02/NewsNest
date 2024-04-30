
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import News from './News';
// import Category from './Category';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// const apiKey = 'b5227b6eb510482daaec078114815ced';
const apiUrl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=b5227b6eb510482daaec078114815ced';

function App() {
  const [category, setCategory] = useState(null)
  const [news, setNews] = useState([]);

  function selectCategory(category) {
    setCategory(category);
  }

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.articles);
        console.log(response.data.articles);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  // async function displayNews(newsId) {
  //   await axios.delete(apiUrl + '/' + todoId);
  //   const response = await axios.get(apiUrl);
  //   setTodos(response.data);
  // }

  return (
    <div>
      <header>
        <Topbar />
      </header>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Sidebar />
          </Col>
          <Col>
            <Row>
              {news.map((article, index) => (
                <Col key={index} xs={12} sm={6} md={4}>
                  <News
                    title={article.title}
                    name={article.source.name}
                    description={article.description}
                    url={article.url}
                    time={article.publishedAt}
                    image={article.urlToImage}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <section id="stories">
        {/* map array variable */}
      </section>
    </div>
  );
}


export default App;
