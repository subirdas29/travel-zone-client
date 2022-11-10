import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import CountryTour from '../CountryTour/CountryTour';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <CountryTour></CountryTour>
        </div>
    );
};

export default Home;