import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './News.css';

function News({ title, name, description, url, time, image }) {
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
    // make entire card clickable
    <a href={url} tyle={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="sameHeight">
    <Card>
        {image ? 
        (<Card.Img variant="top"
            src={image}
            style={{ height: '200px', objectFit: 'cover' }}
            className="news-image"/> 
            ) : (
            <Card.Img variant="top"
            src="https://www.goabadminton.com/sites/default/files/default_images/default-news.jpg"
            style={{ height: '200px', objectFit: 'cover' }}
            className="default-image"/> 
            )}
        <Card.Body >
            <Card.Title>{title}</Card.Title>
            <p><i>{name}</i></p>
            <Card.Text>
                {checkLength(description, 250)}
                <p>{time}</p>
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
    </a>
)
}

export default News;