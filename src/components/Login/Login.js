import React from 'react'
import { LoginStyled } from './Login.styled'
import Header from '../Header/Header'

function Login() {
  return (
    <div>
        <Header />
            <LoginStyled>

            <div className="title">
                <h1>Login</h1>
            </div>

            <div className="form">
                <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Enter Username or Email"
                />
                <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Enter a password"
                />

                <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit">
                    Login
                </button>
            
            </div>
        </LoginStyled>
    </div>
  );
}

export default Login
