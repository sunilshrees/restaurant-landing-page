import React, { useState, useEffect } from 'react';
import People from '../People';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [users, setUsers] = useState(People);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = users.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, users]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 7000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <div className='test-container'>
            <h1>What Client Say</h1>
            <hr className='line' />
            <div className='section-center'>
                {users.map((person, i) => {
                    const { id, image, name, title, quote } = person;
                    let position = 'nextSlide';
                    if (i === index) {
                        position = 'activeSlide';
                    }
                    if (
                        i === index - 1 ||
                        (index === 0 && i === users.length - 1)
                    ) {
                        position = 'lastSlide';
                    }
                    return (
                        <article className={position} key={id}>
                            <img
                                src={image}
                                alt={name}
                                className='person-img'
                            />

                            <div className='test-quote'>
                                <FaQuoteLeft className='bq' />
                                <p>{quote}</p>
                                <h3>{name}</h3>
                                <h4>{title}</h4>
                            </div>
                        </article>
                    );
                })}
            </div>
            <div className='right-side'>
                <button className='prev' onClick={() => setIndex(index - 1)}>
                    <div className='controls'>
                        <h4>Prev</h4>
                        <h4>&larr;</h4>
                    </div>
                </button>
                <button className='next' onClick={() => setIndex(index + 1)}>
                    <div className='controls'>
                        <h4>Next</h4>
                        <h4>&rarr;</h4>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
