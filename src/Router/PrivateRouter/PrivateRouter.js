import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/Authprovider';


const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
   
    if(loading)
    {
        return <div className='flex justify-center'>
        <CircleLoader
        color={'#E5FF00'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"/>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRouter;