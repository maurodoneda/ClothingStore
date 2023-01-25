import {createContext, useEffect, useReducer, useState} from "react";
import {createUserDoc, onAuthStateChangeListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

// const userReducer = (state, action) => {
//     const {type, payload} = action;
//
//     switch (type) {
//         case ACTIONS.SET_USER:
//             return {
//                 ...state,
//                 currentUser: payload
//             };
//         default:
//             throw new Error(`unhandle type ${type} in cartReducer`);
//     }
// }
//
// export const UserProvider = ({children}) => {
//     // const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
//     //
//     // const value = {currentUser, setCurrentUser};
//
//     return (
//         <UserContext.Provider value = {value} >
//             {children}
//         </UserContext.Provider>
//     )
// }
//
// export default UserProvider;
