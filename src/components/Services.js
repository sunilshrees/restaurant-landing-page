import React from 'react';
import {
    MdOutlineFreeBreakfast,
    MdLunchDining,
    MdDinnerDining,
} from 'react-icons/md';
const Services = () => {
    return (
        <div className='service-container' id='service'>
            <div className='service'>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse nihil tenetur suscipit voluptatem? Animi, quas. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                    nesciunt mollitia voluptatibus autem eaque minima officia,
                    nemo qui perspiciatis explicabo.
                </h3>
                <h5>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorum, nemo!
                </h5>

                <div className='schedule'>
                    <hr className='hr1' />
                    <hr className='hr2' />
                    <div className='card'>
                        <div className='icon'>
                            <MdOutlineFreeBreakfast
                                style={{ color: '#fa4c4b' }}
                            />
                        </div>
                        <div className='title'>Breakfast</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ratione, sequi! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quis, harum?
                        </p>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <MdLunchDining style={{ color: '#fa4c4b' }} />
                        </div>
                        <div className='title'>Lunch</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ratione, sequi! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quis, harum?
                        </p>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <MdDinnerDining style={{ color: '#fa4c4b' }} />
                        </div>
                        <div className='title'>Dinner</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ratione, sequi! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quis, harum?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
