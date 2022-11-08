import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Contexts/Authprovider';

const Login = () => {
    const {login} = useContext(AuthContext)
    let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  
      const handleSubmit = event=>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password);
  
          login(email,password)
      .then((result) => {
       
        const user = result.user;
        console.log(user);
       
        navigate(from, { replace: true });
      })
      .catch((error) => {
       console.error(error,'error')
      });
      }
  
      return (
          <div className="hero my-20">
    <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
      <div className="text-center lg:text-left">
        
        <img className='w-3/4' 
        // src={img}
         alt=""/>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-5xl text-center font-bold">Login</h1>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input iring-offset-2nput-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
      );
};

export default Login;