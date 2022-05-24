import React from 'react';
import "./Login.modules.scss";
import AuthContext from '../../context/AuthContext';

function Login() {
    return <AuthContext.Consumer>
        {(ctx) => {
            return (
                <div>
                    <div className="login__wrapper">
                        <form className="login__form" onSubmit={() => { ctx.setLoggedIn(true) }}>
                            <div className="login__formGroup">
                                <label>Email</label>
                                <input className="login__uname" type="text" name="name" placeholder={"Username"} required />
                            </div>
                            <div className="login__formGroup">
                                <label>Password</label>
                                <input className="login__password" type="password" placeholder={"Password"} required />
                            </div>
                            <button className="login__button btn" type="submit">
                                Login
                            </button>
                        </form>
                    </div >
                </div>
            )
        }}
    </AuthContext.Consumer>
}

export default Login