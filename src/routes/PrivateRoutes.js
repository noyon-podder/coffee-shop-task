import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <h2 className='text-orange-500 text-2xl text-center mt-10 mb-10'>Loading......</h2>
    }

    if(user && user.uid){
        return children;
    }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}

export default PrivateRoutes