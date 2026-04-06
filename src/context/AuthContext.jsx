import { useState, useContext, createContext, Children, useEffect } from "react";
import { signInWithEmailAndPassword, 
    signInWithPopup,
    createUserWithEmailAndPassword,
     signOut,
    onAuthStateChanged, } from "firebase/auth";
import { auth, googleProvider} from '../firebase/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const login = (email, password) => 
        signInWithEmailAndPassword(auth, email, password);

    const register = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);

    const GoogleIn = () => 
        signInWithPopup(auth, googleProvider);

    const logout = () =>
        signOut(auth);

    useEffect(() => {
        const authChange = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => authChange();
    }, []);

   return (
     <AuthContext.Provider
      value={{user, login, register, logout, GoogleIn}}>
        { children }
        </ AuthContext.Provider>
   )
}