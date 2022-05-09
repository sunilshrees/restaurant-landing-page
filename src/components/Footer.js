import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='copy'>
                    <h5>
                        &copy;{new Date().getFullYear()}
                        <span> Prime </span>, All rights reserved.
                    </h5>
                </div>
                <div className='social'>
                    <div className='link'>
                        <FaFacebookF />
                    </div>
                    <div className='link'>
                        <FaTwitter />
                    </div>
                    <div className='link'>
                        <FaLinkedin />
                    </div>
                    <div className='link'>
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
