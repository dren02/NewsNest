import React from 'react';
import './Sidebar.css';


function Sidebar({pickGenre}) {
    return (
        <div id="genres">
            <h1 onClick={() => pickGenre('general')}>General</h1><br/>
            <h1 onClick={() => pickGenre('business')}>Business</h1><br/>
            <h1 onClick={() => pickGenre('entertainment')}>Entertainment</h1><br/>
            <h1 onClick={() => pickGenre('health')}>Health</h1><br/>
            <h1 onClick={() => pickGenre('science')}>Science</h1><br/>
            <h1 onClick={() => pickGenre('business')}>Sports</h1><br/>
            <h1 onClick={() => pickGenre('technology')}>Technology</h1>
        </div>
    )
}

export default Sidebar;