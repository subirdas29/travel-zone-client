import React, {useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import useTitle from '../../../Hooks/useTitle';
import CountryTourCard from './CountryTourCard';
import { CircleLoader } from 'react-spinners';

const AllCountryTour = () => {
    useTitle('AllCountriesTour')
    
    const [loading,setLoading]= useState(true)
    console.log(loading)

    const services= useLoaderData()
    useEffect(()=>
    {
        setLoading(false)
        console.log(loading)
    },[])

    
    return (
       <div>
        {
            loading ? 
            <div className='flex justify-center'>
            <CircleLoader
            color={'#E5FF00'}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"/>
            </div>
            :

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-20'>
             {
                 services.map(service => <CountryTourCard key={service._id} service={service}></CountryTourCard>)
             }
         </div>
        }
       </div>
    );
};

export default AllCountryTour;