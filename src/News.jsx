import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function News({ title, name, description, url, time, image }) {
    // function handleGenre(event) {
    //     event.preventDefault();
    //     onGenre();
    //     console.log("Link clicked!");
    // }

    function checkLength(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        } else {
            return text;
        }
    }

return (
    <Card style={{ width: '100%' }}>
        {image && <Card.Img variant="top"
            src={image}
            style={{ height: '200px', objectFit: 'cover' }}
            className="news-image" />}
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>{name}</p>
            <Card.Text>
                {checkLength(description, 150)}
                <p>{time}</p>
            </Card.Text>
            <p><a href={url}>Go</a></p>
        </Card.Body>
    </Card>
)
}

export default News;