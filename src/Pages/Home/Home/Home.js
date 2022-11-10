import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import CountryTour from '../CountryTour/CountryTour';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <CountryTour></CountryTour>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;