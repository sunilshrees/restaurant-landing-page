import React from 'react';
import Services from '../components/Services';
import Recipes from '../components/Recipes';
import Explore from '../components/Explore';
import Testimonials from '../components/Testimonials';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Quote from '../components/Quote';

const Homepage = () => {
    return (
        <>
            <Header />
            <Services />
            <Recipes />
            <Explore />
            <Quote />
            <Testimonials />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Homepage;
