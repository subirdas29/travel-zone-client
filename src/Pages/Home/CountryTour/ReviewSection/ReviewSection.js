import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/Authprovider';

const ReviewSection = () => {

    const {user}= useContext(AuthContext)

    const handleReviewSubmit = event =>{
        event.preventDefault();
        const textarea = event.target;
        const text = textarea.text.value;
        console.log(text);
        fetch()
    }


    return (
        <div className='mx-14 mb-20'>
            <h2 className='text-4xl font-bold mb-6'>Review</h2>
            <form onSubmit={handleReviewSubmit}><textarea  className="textarea textarea-info w-1/2" type="text" name='text' placeholder="Give your Review"></textarea>
           
            <div>
            <button  className="btn btn-outline">Submit</button>
            </div>
            </form>
            
        </div>
    );
};

export default ReviewSection;