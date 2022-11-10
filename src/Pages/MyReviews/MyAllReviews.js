import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';

const MyAllReviews = ({allReview,handleDelete}) => {
  useTitle('MyReviews')
  const notify = () => toast("Your Review deleted!");
    const {img,customer,service_name,email,text,_id} =allReview
    return (

<tr>
<th>
  <label>
   <button  onClick={()=>handleDelete(_id)} className='btn btn-outline btn-error' >X</button>
  </label>
</th>
<td>
  <div className="flex items-center space-x-3">
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
</td>
<td>
  {text}
  <br/>
  <span className="badge badge-ghost badge-sm"></span>
</td>
<td>{email}</td>
<th>
<Link to={`/myreviews/${_id}`}> <button  className="btn btn-outline btn-warning">Edit</button></Link>
</th>
</tr>




    );
};

export default MyAllReviews;