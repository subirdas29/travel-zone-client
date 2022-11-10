import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
   
    if(loading)
    {
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRouter;