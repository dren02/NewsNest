import React, { useState, useEffect } from 'react';
import Topbar from './Topbar';
import Welcome from './Welcome';
import Sidebar from './Sidebar';
import News from './News';
import Sort from './Sort';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&';

function App() {
  const [genre, setGenre] = useState(null)
  const [news, setNews] = useState([]);

  async function fetchNews() {
    let url = apiUrl;
    let check = false;
    if (genre) {
      url += `category=${genre}&`;
      check = true;
    }
    url = url + 'apiKey=' + apiKey;
    try {
      if (check == false) {
        url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=';
      }
      console.log("url is: " + url);
      const response = await axios.get(url);
      console.log(response.data.articles);
      let relevantNews = checkNews(response.data.articles);
      setNews(relevantNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [genre]); // Trigger fetchNews whenever category changes

  function pickGenre(genre) {
    setGenre(genre);
  }

  function checkNews(articles) {
    let removeIrrelavent = articles.filter(data => data.title !== '[Removed]');
    return removeIrrelavent;
  }

  function handleSort(sort) {
    let sortedNews = [...news];
    if (sort === 'oldest') {
      sortedNews.sort((a, b) => {
        // sort by date in ascending order (oldest first)
        return new Date(a.publishedAt) - new Date(b.publishedAt);
      });
    } else {
      sortedNews.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
    }
    setNews(sortedNews);
  }

  return (
    <div>
      <header>
        <Topbar pickGenre={genre} />
        <Sidebar pickGenre={pickGenre} />
      </header>
      <Welcome />
      <section id="main-content">
        <Sort onSort={handleSort} />
        <Container>
          <Row>
            <Col>
              <Row className="news-row">
                {news.map((article, index) => (
                  <Col className="news-box" key={index} xs={12} sm={6} md={4}>
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
      </section>
      <footer>
        <p>Copyright &copy; 2024</p>
    </footer>
    </div>
    
  );
}


export default App;