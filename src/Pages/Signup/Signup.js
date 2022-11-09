import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Contexts/Authprovider';

const Signup = () => {
    const {signUp,profileUpdate,googleSignUp} = useContext(AuthContext)
    const provider = new GoogleAuthProvider();


    const handleSubmit = event=>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, photoURL, email, password);
  
      signUp(email,password)
      .then((result) => {
       
      const user = result.user;
      console.log(user);
      profileUpdate(name, photoURL);
       
      })
      .catch((error) => {
       console.error(error,'error')
      });
    }

    const googleHandleSubmit =()=>
   {
    googleSignUp(provider)
    .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
    
       
      }).catch((error) => {
        
        console.error(error)
        
      });
   }
    return (
        <div className="hero my-20">
        <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
            <img className='w-3/4'
            //  src={img}
             alt=""/>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">SignUp</h1>
            <form className="card-body"
             onSubmit={handleSubmit}
             >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" name="photoURL" placeholder="Your PhotoUrl" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <button onClick={googleHandleSubmit} className="btn  btn-outline hover:bg-[#6440FB] mx-8 mb-8">
                        <FaGoogle  className='mr-3 text-xl'></FaGoogle> <p>Google</p> </button>
          </div>
        </div>
      </div>
    );
};

export default Signup;