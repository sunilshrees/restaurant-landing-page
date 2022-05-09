import React from 'react';
import background from '../images/bg.jpg';
import { AiFillMail, AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

function GetInTouch() {
    var style = {
        width: '100%',
        height: '90vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <>
            <section style={style} id='contact'>
                <div className='git-container'>
                    <h1>Get In Touch</h1>
                    <hr className='line' />
                    <div className='contact'>
                        <div className='contact-info'>
                            <h1>We Available Contact</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Inventore doloremque
                                voluptatem non. Facere, illo nemo.
                            </p>
                            <div className='contact-details'>
                                <div className='contact-icon'>
                                    <AiFillMail style={{ color: '#fff' }} />
                                </div>
                                <div className='contact-name'>
                                    Hello@gmail.com
                                </div>
                            </div>
                            <div className='contact-details'>
                                <div className='contact-icon'>
                                    <AiOutlinePhone style={{ color: '#fff' }} />
                                </div>
                                <div className='contact-name'>
                                    (977) 9843088216
                                </div>
                            </div>
                            <div className='contact-details'>
                                <div className='contact-icon'>
                                    <GoLocation style={{ color: '#fff' }} />
                                </div>
                                <div className='contact-name'>
                                    Buddhanagar,Kathmandu
                                </div>
                            </div>
                        </div>
                        <form
                            className='contact-form'
                            onSubmit={(e) => e.preventDefault()}>
                            <h1>Make a Reservation</h1>
                            <input type='text' placeholder='Name' />
                            <input type='text' placeholder='Email' />
                            <input type='text' placeholder='Phone' />
                            <input type='text' placeholder='Date' />
                            <input type='text' placeholder='Time' />
                            <button type='submit' className='btn'>
                                Reserve Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <div className='brand'>
                <h1>Prime</h1>
            </div>
        </>
    );
}

export default GetInTouch;
