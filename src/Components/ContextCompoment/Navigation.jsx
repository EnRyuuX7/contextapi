import React, { useContext } from 'react';
import Login from './Login';
import AuthContext from '../../context/AuthContext'
import Dashboard from './Dashboard'
const Navigation = () => {
    const ctx = useContext(AuthContext);

    return (
        <div>
            {ctx.isLoggedIn && <Dashboard />}
            {!ctx.isLoggedIn && <Login />}
        </div>
    )

}

export default Navigation;