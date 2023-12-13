import { createContext, useState } from 'react';

// First thing is to initiate a context
export const UserContext = createContext({
    userStorage: null,
    setuserStorage: () => null
});

// Next we will call a function, that will inherit all childrens inside it
// Once that's done, we can provide the storage to those childrens

export const UserProvider = ({children}) => {
    const [userStorage, setuserStorage] = useState(null);

    return (
        <UserContext.Provider value={{userStorage, setuserStorage}}>
            {children}
        </UserContext.Provider>
    )
}