import React from 'react';

const AddServices = () => {

const handleServiceSubmit = event =>{
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const price= form.price.value;
    const description= form.description.value;
    

}

    return (
        <div className='flex justify-center my-64'>
           
<label htmlFor="my-modal" className="btn ">Add Service</label>


<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
   
  <div className="hero bg-base-200">
  <div className="hero-content">
    <div className="text-center">
      
      
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <h1 className="text-5xl mb-5 font-bold">Add Service!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country Name</span>
          </label>
          <input type="text" placeholder="Country Name" name="title"  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" name="img" placeholder="ImageUrl" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price:</span>
          </label>
          <input type="text" placeholder="Price" name="price" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description:</span>
          </label>
          <textarea  type="text" name="description" placeholder="Description" className="textarea textarea-info"></textarea>
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Service</button>
        </div>
        
      </form>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
        </div>
    );
};

export default AddServices;