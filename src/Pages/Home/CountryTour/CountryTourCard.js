import React from 'react';
import { Link } from 'react-router-dom';

const CountryTourCard = ({service}) => {
    const {title,img,price,description,_id} = service;
    
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
  <figure><img className='h-64 w-full' src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    <p>
      
      {
        description.length > 150 ?
        <>{description.slice(0, 150) + '...'} </>
        :
        description
      }
      
      {}
    </p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-5 text-xl">{price}</div> 
      <div>
      <Link to={`/services/allcountries/${_id}`}><button  className='bg-black text-white rounded-lg px-6
       py-3 mb-5' >
       View Details
        </button></Link>
      </div>
     
    </div>
  </div>
</div>
    );
};

export default CountryTourCard;
