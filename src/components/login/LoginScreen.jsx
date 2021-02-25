import React, { useContext } from 'react'
import { authContext } from '../../auth/authContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const  {dispatch} = useContext(authContext);
    const {login} = types;

    const handleLogin = () => {
        // history.push('/');

        const lastPath = localStorage.getItem('LastPath') || '/';

        const action = {
            type: login,
            payload: {
                name: 'Nicolas',
                email: 'nicolas.wladimir@gmail.com',
                age: 23,
                genre: 'M'
            }  
        };

        dispatch(action);

        
        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
