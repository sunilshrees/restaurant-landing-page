import React from 'react';
import hero from '../images/now.jpg';

const Recipes = () => {
    return (
        <div className='recipe-container' id='menu'>
            <div className='recipes'>
                <h1>Special Recipes</h1>
                <hr />

                <div className='grid'>
                    <div className='part'>
                        <img src={hero} alt='s' />
                        <div className='part-card'>
                            <h1>Special Recipe</h1>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet.
                            </p>
                            <h5>see more</h5>
                        </div>
                    </div>
                    <div className='part'>
                        <img src={hero} alt='t' />
                        <div className='part-card'>
                            <h1>Special Recipe</h1>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet.
                            </p>
                            <h5>see more</h5>
                        </div>
                    </div>
                    <div className='part'>
                        <img src={hero} alt='u' />
                        <div className='part-card'>
                            <h1>Special Recipe</h1>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet.
                            </p>
                            <h5>see more</h5>
                        </div>
                    </div>
                    <div className='part'>
                        <img src={hero} alt='v' />
                        <div className='part-card'>
                            <h1>Special Recipe</h1>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet.
                            </p>
                            <h5>see more</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
