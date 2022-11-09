import React from 'react';

const MyAllReviews = ({allReview}) => {
    const {img,Customer,Service_Name,email,text} =allReview
    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p>{text}</p>
            <h1 className="text-5xl font-bold">{Customer}</h1>
            <h1 className="text-5xl font-bold">{email}</h1>
            <p className="py-6">{Service_Name}</p>
           
          </div>
        </div>
      </div>
    );
};

export default MyAllReviews;