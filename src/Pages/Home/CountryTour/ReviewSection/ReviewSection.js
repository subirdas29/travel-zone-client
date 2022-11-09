import React, { useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/Authprovider';


const ReviewSection = () => {

    const {user}= useContext(AuthContext)
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
            Service:_id,
            Service_Name:title,
            Customer: displayName,
            img,
            email,
            text,
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
                alert('Your review is added')
                textarea.reset();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
          });
        }

        
        
    }

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
       </div>
        
    </div>
    );
};

export default ReviewSection;