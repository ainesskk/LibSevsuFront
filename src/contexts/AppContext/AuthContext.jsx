import {createContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {getToken} from "../../localStorage/localStorageFunctions.jsx";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const login = () => setIsAuthorized(true);
    const logout = () => setIsAuthorized(false);

   useEffect(() => {
       if(getToken()) login();
       else logout();
   }, [])


    return <AuthContext.Provider value={{isAuthorized, login, logout}}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}