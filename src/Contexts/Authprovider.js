import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([])
    const [loading,setLoading]= useState(true)
    const signUp=(email, password)=>
    {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const profileUpdate = (name, image_url) => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image_url
        })
            .then(() => { })
            .catch(e => console.error(e))
    }


    const login = (email,password) =>
    {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>
    {
        return signOut(auth);
    }

    useEffect(()=>
    {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return() =>unSubscribe();

    },[])

    const authInfo = {signUp,login,user,logOut,loading,profileUpdate}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;