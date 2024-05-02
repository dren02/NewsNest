import React from 'react';
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
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
        return date.toLocaleString('en-US', options);
    }

    function removeDuplicate(title) { // remove duplicate source name
        const index = title.lastIndexOf("-");
        if (index !== -1) { // found "-", can remove everything after
            return title.substring(0, index);
        } else {
            return title;
        }
    }

    return (
        // make entire card clickable
        <a href={url} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
            <Card>
                {image ?
                    (<Card.Img variant="top"
                        src={image}
                        style={{ height: '250px', objectFit: 'cover' }}
                        className="news-image" />
                    ) : (
                        <Card.Img variant="top"
                            src="https://www.goabadminton.com/sites/default/files/default_images/default-news.jpg"
                            style={{ height: '250px', objectFit: 'cover' }}
                            className="default-image" />
                    )}
                <Card.Body className="card-body" >
                    <Card.Title>{removeDuplicate(title)}</Card.Title>
                    <p><i>{name}</i></p>
                    <Card.Text>
                        {checkLength(description, 250)}
                    </Card.Text>
                    <p className="time">{formatDate(time)}</p>
                </Card.Body>
            </Card>
        </a>
    )
}

export default News;