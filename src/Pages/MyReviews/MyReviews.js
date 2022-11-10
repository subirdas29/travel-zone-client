import React, { useContext, useEffect, useState } from 'react';
import  { AuthContext } from '../../Contexts/Authprovider';
import MyAllReviews from './MyAllReviews';

const MyReviews = () => {

    const {user} =useContext(AuthContext)
    const [allReviews, setAllReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [user?.email])


    const handleDelete = _id =>{
        const procced= window.confirm('Are you sure you want to delete')
        if(procced)
        {
            fetch(`http://localhost:5000/reviews/${_id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>
                {
                    if(data.deletedCount > 0){
                       
                        const filter = allReviews.filter(review => review._id !== _id)
                        setAllReviews(filter)
                        alert('your order is deleted')
                        
                    }
                })
        }
    }
    return (
        <div>
            {
                allReviews.map(allReview =>  <MyAllReviews key={allReview._id} handleDelete={handleDelete}
                    allReview={allReview}></MyAllReviews>)
            }
        </div>
    );
};

export default MyReviews;