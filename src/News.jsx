import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './News.css';

function News({ title, name, description, url, time, image }) {
    // function handleGenre(event) {
    //     event.preventDefault();
    //     onGenre();
    //     console.log("Link clicked!");
    // }

    function checkLength(text, maxLength) {
        if (!text) {
            return ''; 
        }
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        } else {
            return text;
        }
    }

return (
    <a href={url} tyle={{ textDecoration: 'none', color: 'inherit' }}>
    <Card>
        {image && <Card.Img variant="top"
            src={image}
            style={{ height: '200px', objectFit: 'cover' }}
            className="news-image" />}
        <Card.Body >
            <Card.Title>{title}</Card.Title>
            <p><i>{name}</i></p>
            <Card.Text>
                {checkLength(description, 150)}
                <p>{time}</p>
            </Card.Text>
        </Card.Body>
    </Card>
    </a>
)
}

export default News;