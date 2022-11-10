import React, { useContext, useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/Authprovider';
import AllReviews from './AllReviews';


const ReviewSection = () => {

    const {user}= useContext(AuthContext)
    const [refresh,setRefresh]= useState(false)
    const allServices = useLoaderData()
    const {_id,title} = allServices;
   
    const handleReviewSubmit = event =>{
        event.preventDefault();
        const textarea = event.target;
        const text = textarea.text.value;
        const email = user?.email || 'unregistered';
        const displayName = user?.displayName 
        const img = user?.photoURL;
        console.log(text);


        const reviews={
            service:_id,
            service_name:title,
            customer: displayName,
            img,
            email,
            text,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        console.log(reviews)

        if(user?.email)
        {
            fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviews)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.acknowledged)
            {
                setRefresh(true)
                alert('Your review is added')
                textarea.reset();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
          });
        }
            }

          
            const [allReviews, setAllReviews] = useState([])

            useEffect(() => {
                fetch(`http://localhost:5000/reviews/${_id}`)
                    .then(res => res.json())
                    .then(data => setAllReviews(data))
            }, [refresh,_id])
            
             

    return (
        <div className='mx-14 mb-20'>
        <h2 className='text-4xl font-bold mb-6'>Review</h2>
       <div>
        {
            user?.email?  <form onSubmit={handleReviewSubmit}><textarea  className="textarea textarea-info w-1/2" type="text" name='text' placeholder="Give your Review"></textarea>
       
            <div>
            <button  className="btn btn-outline">Submit</button>
            </div>
            </form> : 
            <p>Before Giving your review, Please Logged in</p>
        }
        <div>

        {
            allReviews?.text?
            <>
            <p>No Reviews Yet</p>
           </>:
           <div>
           <h2 className='text-center text-4xl font-bold my-10'>All Reviews: {allReviews.length} </h2>
           <div className="overflow-x-auto w-full">
               <table className="table w-full">

             <thead>
            
           </thead>
<tbody>
            {
                allReviews.map(allReview =>  <AllReviews key={allReview._id}
                    allReview={allReview}></AllReviews>)
            }
            </tbody>
            
            </table>
        </div>
        </div>
        
        }
        
        </div>
       
       </div>
        
    </div>
    );
};

export default ReviewSection;