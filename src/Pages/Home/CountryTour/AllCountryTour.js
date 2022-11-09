import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CountryTourCard from './CountryTourCard';

const AllCountryTour = () => {
    const services= useLoaderData()
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-20'>
            {
                services.map(service => <CountryTourCard key={service._id} service={service}></CountryTourCard>)
            }
        </div>
    );
};

export default AllCountryTour;