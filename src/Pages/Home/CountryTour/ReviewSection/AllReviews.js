import React from 'react';

const AllReviews = ({allReview}) => {
    const {img,customer,service_name,email,text} =allReview
    
    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{customer}</h1>
            <h1 className="text-5xl font-bold">{email}</h1>
            <p className="py-6">{service_name}</p>
            <p className="py-6">{text}</p>
           
          </div>
        </div>
      </div>
    );
};

export default AllReviews;