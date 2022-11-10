import React from 'react';

const AllReviews = ({allReview}) => {
    const {img,customer,service_name,text} =allReview
    
    return (

<div className='my-4 ' >


<div className=' p-5 border-2 border-amber-200 '>


  <div className="flex items-center space-x-3 ">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={img} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div className="font-bold">{customer}</div>
      <div className="text-sm opacity-50">{service_name}</div>
    </div>
  </div>


  {text}
  <br/>
  
</div>

</div>

    );
};

export default AllReviews;