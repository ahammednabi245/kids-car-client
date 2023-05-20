import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import './privateRoute.css'




const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', alignItems: 'center' }}>
            <div className="spinner" ></div>
        </div>

    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;