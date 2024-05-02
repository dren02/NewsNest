import './Welcome.css';
import React from 'react';

function Welcome() {
    return (
        <section id="welcome">
            <div className="message">Hello,</div>
            <div className="message">
                <span>read & stay informed</span>
            </div>
            {/* <p>a css3 animation demo</p> */}
        </section>
    );
}

export default Welcome;