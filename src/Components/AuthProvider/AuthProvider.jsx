import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [allPlants, setAllPlants] = useState([]);
    const [loading, setLoading] =useState(true);
    const [userInfo, setUserInfo] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const emailSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    const emailLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photoUrl})
    }

    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const passReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUserInfo(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
            
        }
    }, [])

    const contextValue ={googleSignIn, emailSignUp, updateUserInfo, emailLogIn, userSignOut, userInfo, setUserInfo, passReset, loading, allPlants, setAllPlants}
    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;