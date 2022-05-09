import React from 'react';
import background from '../images/bg.jpg';

const Quote = () => {
    var style = {
        width: '100%',
        height: '250px',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <section style={style}>
            <div className='quote-container'>
                <h2>
                    " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    "
                </h2>
                <h4>Sunil Shrees</h4>
            </div>
        </section>
    );
};

export default Quote;
