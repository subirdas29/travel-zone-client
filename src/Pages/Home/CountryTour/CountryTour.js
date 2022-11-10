import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CountryTourCard from './CountryTourCard';

const CountryTour = () => {
    
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://travel-zone-server-chi.vercel.app/countries')
        .then(res =>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='m-20'>
            <p className='text-center text-xl text-[#31889c]'>Choose your place</p>
            <h2 className='text-center text-5xl font-bold text-[#0F2454]'>Popular Tours</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
            {
                services.map(service =><CountryTourCard key={service._id}
                service={service}></CountryTourCard>)
            }
        </div>
        <div className='flex justify-center'>
        <Link to="/services"><button  className='bg-black text-white rounded-lg px-6 py-3 mb-5'>See All</button></Link>
        </div>
        </div>
    );
};

export default CountryTour;