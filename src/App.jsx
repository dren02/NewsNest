
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
// import Category from './Category';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [category, setCategory] = useState(null)
  const [news, setNews] = useState([]);

  function selectCategory(category) {
    setCategory(category);
  }

  return (
    <div>
      <header>
        <Topbar />
      </header>
      <Container>
        <Row>
          <Col sm={4}>
            {/* <Sidebar onGenre={() => displayNews(news.id)} /> */}
            <Sidebar/>
          </Col>
          <Col sm={8}>sm=8</Col>
        </Row>
      </Container>

      <section id="stories">
        {/* map array variable */}
      </section>
    </div>
  );
}


export default App;
