import './Welcome.css';
import React from 'react';

function Welcome() {
    return (
        <section id="welcome">
            <div className="message">An Example</div>
            <div className="message">
                <span>from SliderRevolution</span>
            </div>
            {/* <p>a css3 animation demo</p> */}
        </section>
    );
}

export default Welcome;