import React from 'react'
import { Button } from '../../assets/styles/Button';
import '../App.css'
import Header from '../Header/Header'
import { SignupStyled } from './Signup.styed'


function Signup() {
  return (
    <div className="Signup">
        <Header />
        <SignupStyled>
            <div className="title">
                <h1> Sign Up </h1>
            </div>

            <form>
            <div className="form">
                
                <input
                    className="form-control form-control-lg" 
                    type="text"
                    placeholder="Enter Username"
                    required
                />
                
                <input 
                    className="form-control form-control-lg" 
                    type="email"
                    placeholder="Enter E-mail Address"
                    required
                />

                <input 
                    className="form-control form-control-lg" 
                    type="password"
                    placeholder="Enter a password"
                    required
                />
                <input 
                    className="form-control form-control-lg" 
                    type="password"
                    placeholder="Confirm your password"
                    required
                />

                <Button 
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit">
                    Submit
                </Button>
            </div>
            </form>
        </SignupStyled>    
    </div>
  );
}

export default Signup