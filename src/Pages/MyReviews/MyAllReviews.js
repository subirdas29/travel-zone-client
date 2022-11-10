import React from 'react';
import { Link } from 'react-router-dom';

const MyAllReviews = ({allReview}) => {
    const {img,customer,service_name,email,text,_id} =allReview
    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p>{text}</p>
            <h1 className="text-5xl font-bold">{customer}</h1>
            <h1 className="text-5xl font-bold">{email}</h1>
            <p className="py-6">{service_name}</p>
           <Link to={`/myreviews/${_id}`}> <button className="btn btn-outline btn-warning">Edit</button></Link>
<button className="btn btn-outline btn-error">Delete</button>
          </div>
        </div>
      </div>
    );
};

export default MyAllReviews;