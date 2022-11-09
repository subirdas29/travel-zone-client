
import { useLoaderData } from 'react-router-dom';

const IndividualCountrytour = () => {

    const countrydetails = useLoaderData()
    const {img,title,description,price} = countrydetails
   
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{description}</p>
      <button className="btn btn-primary">Price:{price}</button>
    </div>
  </div>
</div>
    );
};

export default IndividualCountrytour;