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


    return (
        <div>
            {
                allReviews.map(allReview =>  <MyAllReviews key={allReview._id}
                    allReview={allReview}></MyAllReviews>)
            }
        </div>
    );
};

export default MyReviews;