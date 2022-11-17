import React, { useContext, } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import useTitle from '../../Hooks/useTitle';

const ReviewEdit = () => {
    const { user } = useContext(AuthContext)
    const editReview = useLoaderData()
    useTitle('ReviewEdit')

    const handleReviewSubmit = event => {
        event.preventDefault();
        const textarea = event.target;
        const text = textarea.text.value;


        fetch(`https://travel-zone-server-subirdas29.vercel.app/allreviews/${editReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ text })
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                 alert('updated')
                }
                console.log(data)
            })

    }
    return (
        <div>
            <div className='mx-14 mb-20'>
                <h2 className='text-4xl font-bold mb-6'>Edit Your Review</h2>
                <div>
                    {
                        user?.email ? <form onSubmit={handleReviewSubmit}><textarea className="textarea textarea-info w-1/2" defaultValue={editReview?.text} type="text" name='text' placeholder="Give your Review"></textarea>

                            <div>
                                <button className="btn btn-outline">Submit</button>
                            </div>
                        </form> :
                            <p>Before Giving your review, Please Logged in</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewEdit;