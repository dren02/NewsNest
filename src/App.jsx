
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import News from './News';
import Sort from './Sort';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const apiKey = 'b5227b6eb510482daaec078114815ced';
const apiUrl =  'https://newsapi.org/v2/top-headlines?country=us&';

// 'https://newsapi.org/v2/top-headlines?country=us&category=${pickGenre}&apiKey=b5227b6eb510482daaec078114815ced';

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
    console.log("genre is: " + genre);
    url = url + 'apiKey=' + apiKey;
    try {
      if (check==false) {
        url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=b5227b6eb510482daaec078114815ced';
    
      }
      console.log("url is: " + url);
      const response = await axios.get(url);
      console.log(response.data.articles);
      let relevantNews = checkNews(response.data.articles);
      setNews(relevantNews);
      // setNews(response.data.articles);
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
        // To sort by date in ascending order (oldest first)
        return new Date(a.publishedAt) - new Date(b.publishedAt);
      });
    } else {
      sortedNews.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
    }
    setNews(sortedNews);

  }


  // useEffect(() => {
  //   axios.get(apiUrl)
  //     .then(response => {
  //       setNews(response.data.articles);
  //       console.log(response.data.articles);
  //     })
  //     .catch(error => console.error('Error fetching todos:', error));
  // }, []);


  return (
    <div>
      <header>
        <Topbar pickGenre={genre}/>
      </header>
      <Sort onSort={handleSort}/>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Sidebar pickGenre={pickGenre} />
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
