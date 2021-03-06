import { useUser } from '../context/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
    const { userData } = useUser();
  
    if (roleList.includes(userData.rol)) {
      return children;
    }
  
    return <>No estás autorizado para ver este sitio</>;
  };

export default PrivateRoute
