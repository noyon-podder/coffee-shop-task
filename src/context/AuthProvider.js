import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user, setUser] = useState({})
const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const userSignInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    return signOut(auth)
}

const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
}
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
      user,
      loading,
      createUser,
      userSignInWithEmail,
      logOut,
      logInWithGoogle,
    };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider