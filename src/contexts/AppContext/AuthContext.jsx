import {createContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {getToken, getRole, getImageId} from "../../localStorage/localStorageFunctions.jsx";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const defaultPhoto = "33f4f778-4596-4bf9-87cf-f14929462203";
    const [photoChanged, setPhotoChanged] = useState(defaultPhoto);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = () => setIsAuthorized(true);
    const logout = () => setIsAuthorized(false);

    const giveAdminRights = () => setIsAdmin(true);
    const removeAdminRights = () => setIsAdmin(false);

    const setDefaultPhoto = () => setPhotoChanged(defaultPhoto);

   useEffect(() => {
       if(getToken()) login();
       else logout();
       if(getRole() === "Admin") giveAdminRights()
       else removeAdminRights()
   }, [])

    useEffect(() => {
        async function fetchPhoto() {
            if(getToken()){
                const imgId = await getImageId();
                setPhotoChanged(imgId);
            }
            else setPhotoChanged("33f4f778-4596-4bf9-87cf-f14929462203");
        }
        fetchPhoto()
    }, [])

    return <AuthContext.Provider value={{isAuthorized, login, logout, isAdmin, giveAdminRights, removeAdminRights, photoChanged, setPhotoChanged, setDefaultPhoto}}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}