import React from 'react';

const CountryTourCard = ({service}) => {
    const {title,img,price,description} = service;

    
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
  <figure><img className='h-64 w-full' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{price}</div> 
     
    </div>
  </div>
</div>
    );
};

export default CountryTourCard;