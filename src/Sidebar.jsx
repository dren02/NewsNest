import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sidebar() {
    function handleGenre(event) {
        event.preventDefault();
        onGenre();
        console.log("Link clicked!");
    }

    return (
        <div id="genres">
            <a href="url" onClick={handleGenre}>General</a><br/>
            <a href="url" onClick={handleGenre}>Business</a><br/>
            <a href="url" onClick={handleGenre}>Entertainment</a><br/>
            <a href="url" onClick={handleGenre}>Health</a><br/>
            <a href="url" onClick={handleGenre}>Science</a><br/>
            <a href="url" onClick={handleGenre}>Technology</a><br/>
            <a href="url" onClick={handleGenre}>Sports</a>
        </div>
    )
}

export default Sidebar;