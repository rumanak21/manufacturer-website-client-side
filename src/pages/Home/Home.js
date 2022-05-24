import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HeroSection from './HeroSection';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <HeroSection></HeroSection>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;