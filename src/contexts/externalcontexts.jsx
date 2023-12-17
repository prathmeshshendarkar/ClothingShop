import { createContext, useEffect, useState } from 'react';
import { onAuthStateChangedListener , createUserDocument } from '../utils/firebase.utils';

// First thing is to initiate a context
export const UserContext = createContext({
    userStorage: null,
    setuserStorage: () => null
});

// Next we will call a function, that will inherit all childrens inside it
// Once that's done, we can provide the storage to those childrens

export const UserProvider = ({children}) => {
    const [userStorage, setuserStorage] = useState(null);

    // Whenever the component mounts, the useEffect will trigger
    // Now, whenever there are any changes, 
    useEffect(() => {
        // signOutUser();
        // console.log(userStorage);
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocument(user);
            }
            setuserStorage(user);
        });
    
        return unsubscribe;
    });
    return (
        <UserContext.Provider value={{userStorage, setuserStorage}}>
            {children}
        </UserContext.Provider>
    )
}