import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Sidebar.css';


function Sidebar({pickGenre}) {
    // function handleGenre(event) {
    //     event.preventDefault();
    //     onGenre();
    //     console.log("Link clicked!");
    // }

    return (
        <div id="genres">
            <p onClick={() => pickGenre('general')}>General</p><br/>
            <p onClick={() => pickGenre('business')}>Business</p><br/>
            <p onClick={() => pickGenre('entertainment')}>Entertainment</p><br/>
            <p onClick={() => pickGenre('health')}>Health</p><br/>
            <p onClick={() => pickGenre('science')}>Science</p><br/>
            <p onClick={() => pickGenre('business')}>Sports</p><br/>
            <p onClick={() => pickGenre('technology')}>Technology</p>
            <p onClick={() => pickGenre('technology')}>Bookmark</p>

        </div>
    )
}

export default Sidebar;