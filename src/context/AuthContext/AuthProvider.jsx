import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password );
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup( auth, googleProvider);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unSubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        registerUser,
        signInUser,
        signInGoogle,
        user,
        loading,
        setLoading,
        logOut
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;