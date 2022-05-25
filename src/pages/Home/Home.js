import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HeroSection from './HeroSection';
import HeroSection2 from './HeroSection2';
import Product from './Product';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <BusinessSummary></BusinessSummary>
            <HeroSection></HeroSection>
            <HeroSection2></HeroSection2>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;