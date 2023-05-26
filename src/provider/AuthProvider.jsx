import React, { createContext, useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, updateProfile,onAuthStateChanged,sendPasswordResetEmail} from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function AuthProvider({ children }) {
    const [userName, setUserName] = useState(null);
    const [photoUrl, setPhotoUrl] = useState('')
    const [loading, setLoading] = useState(true);

    const googleHandler = () => {
        setLoading(true);
        console.log('google btn clicked')
        return signInWithPopup(auth, googleProvider)
    }

    const githubHandler = () => {
        setLoading(true);
        console.log('github btn clicked')
        return signInWithPopup(auth, githubProvider)
    }

    const registerWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name,photo_url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo_url
        })
    }

    const updateUserPassWord = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUserName(null)
            setPhotoUrl('')
        }).catch((error) => {
            // An error happened.
        });
    }

        // observer user auth state 
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUserName(currentUser?.displayName);
                setPhotoUrl(currentUser?.photoURL)
                setLoading(false);
            });
    
            // stop observing while unmounting 
            return () => {
                return unsubscribe();
            }
        }, [])

    const authProvider = {
        loading,
        userName,
        setUserName,
        photoUrl,
        setPhotoUrl,
        googleHandler,
        githubHandler,
        registerWithEmail,
        updateUserProfile,
        updateUserPassWord,
        logInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authProvider}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider