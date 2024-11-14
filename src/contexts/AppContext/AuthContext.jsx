import {createContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {getToken, getRole} from "../../localStorage/localStorageFunctions.jsx";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = () => setIsAuthorized(true);
    const logout = () => setIsAuthorized(false);

    const giveAdminRights = () => setIsAdmin(true);
    const removeAdminRights = () => setIsAdmin(false);

   useEffect(() => {
       if(getToken()) login();
       else logout();
       if(getRole() === "Admin") giveAdminRights()
       else removeAdminRights()
   }, [])


    return <AuthContext.Provider value={{isAuthorized, login, logout, isAdmin, giveAdminRights, removeAdminRights}}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}