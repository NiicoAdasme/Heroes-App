import React, { useEffect, useReducer } from 'react';
import { authContext } from './auth/authContext.js';
import { authReducer } from './auth/authReducer.js';
import { AppRouter } from './components/routers/AppRouter.js';


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (

        <authContext.Provider value={{user, dispatch}} >
            <AppRouter/>
        </authContext.Provider>

        
    )
}
