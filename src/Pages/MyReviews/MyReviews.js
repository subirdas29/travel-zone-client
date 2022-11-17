import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  { AuthContext } from '../../Contexts/Authprovider';
import MyAllReviews from './MyAllReviews';

const MyReviews = () => {

    const {user} =useContext(AuthContext)
    const [allReviews, setAllReviews] = useState([])
   


    useEffect(() => {
        fetch(`https://travel-zone-server-subirdas29.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => 
                {
                    setAllReviews(data)
                console.log(data)}
                
                )
    }, [user?.email])


    const handleDelete = _id =>{
        const procced= window.confirm('Are you sure you want to delete')
        if(procced)
        {
            fetch(`https://travel-zone-server-subirdas29.vercel.app/reviews/${_id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>
                {
                    if(data.deletedCount > 0){
                       
                        const filter = allReviews.filter(review => review._id !== _id)
                        setAllReviews(filter);
                        toast('deleted');
                        
                        
                    }
                })
        }
    }
    return (


        <div>
        <h2 className='text-center text-4xl font-bold my-10'>My Reviews: {allReviews.length} </h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

            <thead>
  <tr>
  <th>
      
    </th>
    
    <th>Name</th>
    <th>Review</th>
    <th>Email</th>
    <th>Update</th>
    <th></th>
  </tr>
</thead>
                <tbody>
                   
                
                {
                         allReviews.map(allReview =>  <MyAllReviews key={allReview._id} handleDelete={handleDelete}
                                  allReview={allReview}></MyAllReviews>)
                    }
                
                </tbody>
            </table>
        </div>


        
    </div>




    
    );
};

export default MyReviews;