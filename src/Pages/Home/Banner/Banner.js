import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/3fc5GRS/fabian-quintero-UWQP2mh5-YJI-unsplash.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <p className="mb-5 text-white">Let's Travel The world With Us</p>
      <h1 className="mb-5 text-5xl font-bold text-white">Explore The World With Travel</h1>
      <Link to="/services"><button className="btn btn-[#319ABE]">Let's Tour</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;