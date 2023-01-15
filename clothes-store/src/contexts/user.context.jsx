import {createContext, useEffect, useState} from "react";
import {createUserDoc, onAuthStateChangeListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        return onAuthStateChangeListener((user) => {
            console.log('user', user);
            if(user){
                createUserDoc(user);
            }
            setCurrentUser(user);
        })
    }, []);


    return (
        <UserContext.Provider value = {value} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
